export default function createReportObject(employeesList) {
  const send = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      let arr = 0;
      // eslint-disable-next-line no-unused-vars
      for (const i of Object.keys(employeesList)) {
        arr += 1;
      }
      return arr;
    },
  };
  return send;
}
