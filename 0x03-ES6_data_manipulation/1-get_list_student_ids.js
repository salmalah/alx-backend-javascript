export default function getListStudentIds(input) {
  // Check if the input is an array
  if (!Array.isArray(input)) {
    // If not an array, return an empty array
    return [];
  }

  // If input is an array, use map function to extract student ids
  const resultArray = input.map(item => item.id);

  return resultArray;
}
