var selectContainer = document.querySelector(".custom-select-container");
var selectElement = selectContainer.querySelector("select");

selectContainer.addEventListener("click", function () {
  selectElement.focus();
});

selectElement.addEventListener("focus", function () {
  selectContainer.classList.add("show-dropdown");
});

selectElement.addEventListener("blur", function () {
  selectContainer.classList.remove("show-dropdown");
});