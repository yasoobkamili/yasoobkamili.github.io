const toggleButton = document.getElementById("menu");
const sidebar = document.getElementById("aside");
function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("open");
}
window.addEventListener("load", function () {
  document.getElementById("loadingOverlay").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("loadingOverlay").style.display = "none";
    document.querySelector(".content").classList.add("loaded");
  }, 500);
});
