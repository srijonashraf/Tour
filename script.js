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

    var isValid = validateForm();

    if (!isValid) {
      alert("Please fill all the fields!");
      return;
    }

    var subTotal = dayField.value * 14990;
    var Vat = subTotal * 0.05;
    var grandTotal = subTotal + Vat;

    document.getElementById("total").innerHTML = subTotal;
    document.getElementById("vat").innerHTML = Vat;
    document.getElementById("grandT").innerHTML = grandTotal;
     document.getElementById("grandTotal").value = grandTotal;

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

    if (
      dateField.value === "" ||
      nameField.value === "" ||
      phoneField.value === "" ||
      coasterField.value === "" ||
      dayField.value === ""
    ) {
      return false;
    }

    return true;
  }

  // Remove number input spinner buttons
  var coasterInput = document.getElementById("coaster");
  coasterInput.addEventListener("focus", function () {
    this.removeAttribute("readonly");
  });

  coasterInput.addEventListener("blur", function () {
    this.setAttribute("readonly", "readonly");
  });

  // Limit coaster to maximum 5
  coasterInput.addEventListener("input", function () {
    var value = parseInt(this.value);
    if (value < 1) {
      this.value = 1;
      alert("Minimum limit exceeded. Coaster set to 1.");
    } else if (value > 5) {
      this.value = 5;
      alert("Maximum limit exceeded. Coaster set to 5.");
    }
  });

});
