// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  const iterator = {
    currentDepartmentIndex: 0,
    currentEmployeeIndex: 0,
    next() {
      const departments = Object.keys(report);

      // Check if there are more departments
      if (this.currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[this.currentDepartmentIndex];
        const employees = report[currentDepartment];

        // Check if there are more employees in the current department
        if (this.currentEmployeeIndex < employees.length) {
          const currentEmployee = employees[this.currentEmployeeIndex];
          this.currentEmployeeIndex++;

          return { value: currentEmployee, done: false };
        }

        // Move to the next department
        this.currentDepartmentIndex++;
        this.currentEmployeeIndex = 0;

        // Recursive call to handle the next department
        return this.next();
      }

      // No more departments and employees
      return { done: true };
    },
  };

  iterator[Symbol.iterator] = function () {
    return this;
  };

  return iterator;
}
