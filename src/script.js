const firstName = document.getElementById("firstname");
const concern = document.getElementById("drop-down");
const button = document.getElementById("button");
const errorFirstName = document.querySelector(".error-firstname");
const errorDropDown = document.querySelector(".error-dropdown");

function checkFirstName() {
  if (firstName.value == "") {
    errorFirstName.classList.remove("d-none");
  }
}

function checkDropDown() {
  if (concern.selectedIndex == "0") {
    errorDropDown.classList.remove("d-none");
  }
}

button.addEventListener("click", checkFirstName);
button.addEventListener("click", checkDropDown);