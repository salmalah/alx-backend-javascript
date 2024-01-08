export default function getStudentsByLocation(students, city) {
  const resultArray = students.filter((student) => student.location === city);
  return resultArray;
}
