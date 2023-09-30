let userInput = '';

function calculateSalary() {
  const wage = parseFloat(document.getElementById("wage").value) || 0;
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  let totalHours = 0;

  for (let day of days) {
    totalHours += parseFloat(document.getElementById(day).value) || 0;
  }

  const totalSalary = wage * totalHours;
  document.getElementById("totalSalary").innerText = totalSalary.toFixed(2);

  return totalSalary;  // This is the weekly salary.
}

function displaySalaries() {
  const weeklySalary = calculateSalary();
  const yearlySalary = weeklySalary * 52;  // considering 52 weeks in a year

  // Display the yearly salary
  document.getElementById("yearlySalary").innerText = yearlySalary.toFixed(2);

  // Store yearlySalary to localStorage and userInput
  localStorage.setItem('yearlySalary', yearlySalary);
  userInput = yearlySalary;

  return yearlySalary;
}

function redirectToComparison() {
  // Assumes that displaySalaries() has been called before this and the yearly salary is calculated
  window.location.href = 'comparisonResult.html';
}

function storeKnownSalary() {
  const userSalary = parseFloat(document.getElementById('userSalary').value);
  if (!isNaN(userSalary)) {
    localStorage.setItem('yearlySalary', userSalary);
  }
}

function storeSalaryAndRedirect() {
  const userSalary = document.getElementById('userSalary').value;
  if (userSalary) {
    localStorage.setItem('yearlySalary', userSalary);
    window.location.href = 'comparisonResult.html';
  } else {
    alert("Please enter your salary.");
  }
}