/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// Function to create an employee record

function createEmployeeRecord(employeeArray) {
  return {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}
function createEmployeeRecords(employeeArrays) {
  return employeeArrays.map(createEmployeeRecord);
}
function createTimeInEvent(employeeRecord, dateTime) {
  let [date, hour] = dateTime.split(' ');
  
  employeeRecord.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  });
  
  return employeeRecord;
}
function createTimeOutEvent(employeeRecord, dateTime) {
  let [date, hour] = dateTime.split(' ');
  
  employeeRecord.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  });
  
  return employeeRecord;
}
function hoursWorkedOnDate(employeeRecord, date) {
  let timeIn = employeeRecord.timeInEvents.find(event => event.date === date);
  let timeOut = employeeRecord.timeOutEvents.find(event => event.date === date);
  
  return (timeOut.hour - timeIn.hour) / 100;
}
function wagesEarnedOnDate(employeeRecord, date) {
  let hoursWorked = hoursWorkedOnDate(employeeRecord, date);
  return hoursWorked * employeeRecord.payPerHour;
}
function wagesEarnedOnDate(employeeRecord, date) {
  let hoursWorked = hoursWorkedOnDate(employeeRecord, date);
  return hoursWorked * employeeRecord.payPerHour;
}
function allWagesFor(employeeRecord) {
  let eligibleDates = employeeRecord.timeInEvents.map(event => event.date);

  let totalWages = eligibleDates.reduce((total, date) => {
    return total + wagesEarnedOnDate(employeeRecord, date);
  }, 0);

  return totalWages;
}
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
}
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPayroll, employeeRecord) => {
    return totalPayroll + allWagesFor(employeeRecord);
  }, 0);
}
// Example employee data
let employeeData = [
  ["Thor", "Odinson", "God of Thunder", 100],
  ["Loki", "Laufeyson", "God of Mischief", 50]
];

// Create employee records
let employees = createEmployeeRecords(employeeData);

// Add time events
createTimeInEvent(employees[0], "2024-10-18 0900");
createTimeOutEvent(employees[0], "2024-10-18 1700");

createTimeInEvent(employees[1], "2024-10-18 1000");
createTimeOutEvent(employees[1], "2024-10-18 1600");

// Calculate payroll
let payroll = calculatePayroll(employees);
console.log(payroll);  // Output total payroll



