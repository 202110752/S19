let username;
let password;
let role;

function login() {
  username = prompt("Please enter your username:");
  password = prompt("Please enter your password:");
  role = prompt("Please enter your role (admin/teacher/student):");
  
  if (!username || !password || !role) {
    alert("Username, password, and role cannot be empty.");
  } else {
    switch(role) {
      case "admin":
        alert("Welcome back to the class portal, admin!");
        break;
      case "teacher":
        alert("Thank you for logging in, teacher!");
        break;
      case "student":
        alert("Welcome to the class portal, student!");
        break;
      default:
        alert("Role out of range.");
        break;
    }
  }
}

function calculateAverage() {
  let num1 = parseFloat(prompt("Enter number 1:"));
  let num2 = parseFloat(prompt("Enter number 2:"));
  let num3 = parseFloat(prompt("Enter number 3:"));
  let num4 = parseFloat(prompt("Enter number 4:"));

  if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    alert("Please enter valid numbers.");
    return;
  }

  let average = (num1 + num2 + num3 + num4) / 4;
  average = Math.round(average);
  alert("Hello, student! Your average is " + average + ".");

  if (average <= 74) {
    alert("The letter equivalent is F");
  } else if (average >= 85 && average <= 89) {
    alert("The letter equivalent is B");
  } else if (average >= 90 && average <= 95) {
    alert("The letter equivalent is A");
  } else if (average > 96) {
    alert("The letter equivalent is A+");
  }
}