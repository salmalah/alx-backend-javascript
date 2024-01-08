export default function getListStudentIds(input) {
	if (!Array.isArray(input)) {
		return [];
	}
	const resultArray = input.map(item => {
		return item.id;
	});
	return resultArray;
}
