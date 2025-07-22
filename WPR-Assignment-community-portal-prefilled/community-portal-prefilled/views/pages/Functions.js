/*const CheckLeapYear = function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} was a leap year`);
  } else {
    console.log(`${year} was not a leap year`);
  }
};
CheckLeapYear(2016);

CheckLeapYear(2020);*/

/*const CalculateTax2 = (salary) => {
  let tax = 0;

  if (salary < 8000) {
    tax = salary * 0.15;
  } else if (salary < 12000) {
    tax = salary * 0.2;
  } else salary > 12000;
  {
    tax = salary * 0.25;
  }
  console.log(`The tax for your salary of ${salary} is: ${tax}`);
};
CalculateTax2(7000);*/

/*const getUserAccess = (name, role) => {
  let accessMessage;

  switch (role.toLowerCase()) {
    case "admin":
      accessMessage = `${name} is an admin with all access`;
      break;
    case "lecturer":
      accessMessage = `${name} is a lecturer with create and delete access`;
      break;
    case "student":
      accessMessage = `${name} is a student with read access`;
      break;
    default:
      accessMessage = `${name} is a trial user`;
  }
  console.log(accessMessage);
};

getUserAccess("Ryan", "Student");*/

const calculateBonus = (salary, yearsOfService) => {
  let bonus = 0;
  if (yearsOfService > 5) {
    bonus = salary * 0.05;
  }
  return bonus;
};

const getEmployeeDetails = () => {
  const salary = parseFloat(prompt("Enter your salary:"));
  const yearsOfService = parseInt(prompt("Enter your years of service:"));

  const bonus = calculateBonus(salary, yearsOfService);
  const totalSalary = salary + bonus;

  console.log(`Bonus amount: ${bonus}`);
  console.log(`Total salary after bonus: ${totalSalary}`);
};

getEmployeeDetails();
