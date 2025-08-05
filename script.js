const toggleButton = document.getElementById("menu");
const sidebar = document.getElementById("aside");
function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("open");
}