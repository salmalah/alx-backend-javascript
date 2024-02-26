const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split data by lines and remove empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Extract fields from headers
    const headers = lines[0].split(',');

    // Initialize an object to store the counts for each field
    const fieldCounts = {};

    // Iterate through each line starting from the second line (index 1)
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      const field = values[values.length - 1]; // Field is the last value
      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      fieldCounts[field].push(values[0]); // Assuming first value is first name
    }

    // Calculate total number of students
    const totalStudents = lines.length - 1; // Subtract 1 for the header line

    // Log total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log number of students in each field and list of first names
    for (const field in fieldCounts) {
      if (Object.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field].length;
        const list = fieldCounts[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (error) {
    // If an error occurs (e.g., file not found), throw a custom error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
