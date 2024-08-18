let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
});

function home() {
  document.location.href = "home.html";
}
function report() {
  document.location.href = "report.html";
}
