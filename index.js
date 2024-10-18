/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// Function to create an employee record

// Function to create an employee record from an array
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

// Function to create multiple employee records from an array of arrays
function createEmployeeRecords(employeeArrays) {
  return employeeArrays.map(createEmployeeRecord);
}

// Function to add a timeIn event to an employee record
function createTimeInEvent(dateTime) {
  let [date, hour] = dateTime.split(' ');
  
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  });
  
  return this;
}

// Function to add a timeOut event to an employee record
function createTimeOutEvent(dateTime) {
  let [date, hour] = dateTime.split(' ');
  
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  });
  
  return this;
}

// Function to calculate hours worked on a given date
function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find(event => event.date === date);
  let timeOut = this.timeOutEvents.find(event => event.date === date);
  
  return (timeOut.hour - timeIn.hour) / 100;
}

// Function to calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
  let hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
}

// Function to calculate all wages for an employee
function allWagesFor() {
  let eligibleDates = this.timeInEvents.map(event => event.date);
  
  return eligibleDates.reduce((total, date) => {
    return total + wagesEarnedOnDate.call(this, date);
  }, 0);
}

// Function to find an employee by first name
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
}

// Function to calculate the total payroll for an array of employee records
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPayroll, employeeRecord) => {
    return totalPayroll + allWagesFor.call(employeeRecord);
  }, 0);
}
// Example employee data
let employeeData = [
  ["Gray", "Worm", "Security", 1],
  ["John", "Doe", "Manager", 20]
];

// Create employee records
let employees = createEmployeeRecords(employeeData);

// Add time events
createTimeInEvent.call(employees[0], "2024-10-18 0900");
createTimeOutEvent.call(employees[0], "2024-10-18 1700");
createTimeInEvent.call(employees[1], "2024-10-18 1000");
createTimeOutEvent.call(employees[1], "2024-10-18 1600");

// Calculate total payroll
let totalPayroll = calculatePayroll(employees);
console.log(totalPayroll); // Outputs the total payroll



