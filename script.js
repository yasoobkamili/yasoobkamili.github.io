const toggleButton = document.getElementById("menu");
const sidebar = document.getElementById("aside");
function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("open");
}
// window.addEventListener("load", function () {
//   document.getElementById("loadingOverlay").style.opacity = "0";
//   setTimeout(function () {
//     document.getElementById("loadingOverlay").style.display = "none";
//     document.querySelector(".content").classList.add("loaded");
//   }, 500);
// });
// Record the time when the page starts loading
const loaderStartTime = Date.now();

window.addEventListener("load", function () {
  const elapsed = Date.now() - loaderStartTime; // time taken so far
  const minDisplay = 1500; 

  // Time still left to reach minDisplay
  const delay = Math.max(0, minDisplay - elapsed);

  setTimeout(function () {
    document.getElementById("loadingOverlay").style.opacity = "0";

    setTimeout(function () {
      document.getElementById("loadingOverlay").style.display = "none";
      document.querySelector(".content").classList.add("loaded");
    }, 500); 
  }, delay);
});
