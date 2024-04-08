function calculateAgeFromInputs(day, month, year) {
  // Parse the input values to integers
  var inputDay = parseInt(day);
  var inputMonth = parseInt(month) - 1; // Month is zero-indexed in JavaScript
  var inputYear = parseInt(year);

  // Get the current date
  var today = new Date();

  // Create a Date object for the input birthdate
  var birthDate = new Date(inputYear, inputMonth, inputDay);

  // Calculate the difference in milliseconds
  var ageInMilliseconds = today - birthDate;

  // Convert milliseconds to years, months, and days
  var years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  var months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
  var days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
  console.log('years,months,days :>> ', years,months,days);

  // Return the age as an object with years, months, and days
  return {
      years: years,
      months: months,
      days: days

  };

}

function calculateAndDisplayAge() {
  var day=document.getElementById("day").value;
console.log('day :>> ', day);
  var month=document.getElementById("month").value;
 console.log('month :>> ', month);
  var year=document.getElementById("year").value;
console.log('year :>> ', year);
  

  // Calculate age
  var age = calculateAgeFromInputs(day, month, year);

  // Display age in respective input fields
  document.getElementById("yearValue").innerHTML = age.years;
  document.getElementById("monthValue").innerHTML = age.months;
  document.getElementById("dayValue").innerHTML = age.days;
}
























// var dayTxt=document.getElementById("day");

// var dayValue=document.getElementById("dayValue").innerHTML;
 
// var dayTxtValue = dayTxt.value; 
// dayValue.textContent=dayTxtValue;

// console.log(dayValue);

//  document.getElementById("day").addEventListener("input", function() {
//     var dayvalue = this.value; // Get the current value of the input field
//     document.getElementById("dayValue").textContent = dayvalue; // Assign the value to the paragraph     
    


//   document.getElementById("month").addEventListener("input", function() {
//     var monthValue = this.value; // Get the current value of the input field
//     document.getElementById("monthValue").textContent = monthValue; // Assign the value to the paragraph
//   });

//   document.getElementById("year").addEventListener("input", function() {
//     var yearValue = this.value; // Get the current value of the input field
//     if (yearValue > new Date ()){
//         document.getElementById("yearValue").textContent = "Error"; // Assign the value to the paragraph

//     }
//     else{
//     document.getElementById("yearValue").textContent = yearValue; // Assign the value to the paragraph

//     }
//   });

// });



//   var inputField = document.getElementById("day");
//   var inputValue = inputField.value;

//   // Regular expression to match only numbers and exactly two characters
//   var regex = /^[0-9]{2}$/;

//   if (regex.test(inputValue)) {
//     document.getElementById("day").textContent = "Valid input!";
//   } else {
//     document.getElementById("day").textContent = "Please enter exactly two numbers.";
//   }

