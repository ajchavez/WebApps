function changeMenu(x) {
  x.classList.toggle("change");
  var y = document.getElementById("dropdown");
  if (y.style.display == "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
