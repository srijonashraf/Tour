document.getElementById("fareBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  fareCalc(); // Calculate the fare

  // Submit the form programmatically
  document.querySelector("form").submit();
});

function fareCalc() {
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
    alert("Please fill all the fields!");
    return false;
  }

  var subTotal = dayField.value * 14990;
  var Vat = subTotal * 0.05;
  var grandTotal = subTotal + Vat;

  document.getElementById("total").innerHTML = subTotal;
  document.getElementById("vat").innerHTML = Vat;
  document.getElementById("grandT").innerHTML = grandTotal;
}
