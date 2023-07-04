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



window.addEventListener('DOMContentLoaded', function () {
  var miniNavElement = document.getElementsByClassName('nav')[0];
  var majorNavElement = document.getElementsByClassName('navbar')[0];
  var miniNavHeight = miniNavElement.offsetHeight || miniNavElement.clientHeight;
  var majorNavHeight = majorNavElement.offsetHeight || majorNavElement.clientHeight;
  var heroSection = miniNavHeight + majorNavHeight;
  var viewportHeight = window.innerHeight;
  document.getElementsByClassName('carousel-item')[0].style.height = viewportHeight - heroSection + 'px';
  document.getElementsByClassName('carousel-item')[1].style.height = viewportHeight - heroSection + 'px';
});