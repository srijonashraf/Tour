document.addEventListener("DOMContentLoaded", function () {
  var currentDate = new Date();
  var minDate = currentDate.toISOString().split("T")[0]; // Get today's date

  var futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + 3); // Add 3 months to the current date
  var maxDate = futureDate.toISOString().split("T")[0]; // Get the date 3 months from now

  var dateField = document.getElementById("date");
  dateField.setAttribute("min", minDate);
  dateField.setAttribute("max", maxDate);

  document
    .getElementById("fareBtn")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default form submission behavior
      fareCalc(); // Calculate the fare
    });

  function fareCalc() {
    var dateField = document.getElementById("date");
    var nameField = document.getElementById("name");
    var phoneField = document.getElementById("phone");
    var coasterField = document.getElementById("coaster");
    var dayField = document.getElementById("day");

    var subTotal = dayField.value * 14990;
    var Vat = subTotal * 0.05;
    var grandTotal = subTotal + Vat;

    document.getElementById("total").innerHTML = subTotal;
    document.getElementById("vat").innerHTML = Vat;
    document.getElementById("grandT").innerHTML = grandTotal;
  }

  document
    .getElementById("bookBtn")
    .addEventListener("click", function (event) {
      if (validateForm()) {
        return; // If the form is valid, allow form submission
      } else {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    });

  function validateForm() {
    var dateField = document.getElementById("date");
    var nameField = document.getElementById("name");
    var phoneField = document.getElementById("phone");
    var coasterField = document.getElementById("coaster");
    var dayField = document.getElementById("day");

    var isValid = true;

    if (
      dateField.value === "" ||
      nameField.value === "" ||
      phoneField.value === "" ||
      coasterField.value === "" ||
      dayField.value === ""
    ) {
      isValid = false;
      alert("Please fill all the fields!");
    }

    return isValid;
  }
});
