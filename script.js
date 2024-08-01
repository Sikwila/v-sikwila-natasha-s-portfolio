// menu dropdown

function toggleMenu() {
  var menuDropdown = document.getElementById("menu-dropdown");
  menuDropdown.style.display = menuDropdown.style.display === "none" ? "block" : "none";
}

function hideMenu() {
  document.getElementById("menu-dropdown").style.display = "none";
}