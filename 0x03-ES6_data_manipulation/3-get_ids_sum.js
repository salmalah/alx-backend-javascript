export default function getStudentsByLocation(students) {
  const sum = students.reduce((accumulator, student) => accumulator + student.id, 0);
  return sum;
}
