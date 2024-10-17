const bgcolor = document.querySelector("#icon");
const colors = [
  "#FFDDC1",
  "#F8E1A6",
  "#C1E1C1",
  "#E2C6FF",
  "#FFCCF9",
  "#D9E4F5",
  "#F2D0A9",
  "#E1F7D5",
  "#FFE4B2",
  "#FFF8E8",
  "#F7CAC9",
  "#FDEBD0",
  "#F5E6CC",
  "#E6E6FA",
  "#D4EFDF",
  "#F9E79F",
  "#FADBD8",
  "#FADD12",
];

let i = 0;
function toggleBG() {
  document.body.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
}
bgcolor.addEventListener("click", toggleBG);

const menuToggleBtn = document.getElementById("menu-toggle-btn");
const dropdownMenu = document.getElementById("dropdown-menu");

menuToggleBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("active");
});
window.addEventListener("click", function (e) {
  if (!dropdownMenu.contains(e.target) && !menuToggleBtn.contains(e.target)) {
    dropdownMenu.classList.remove("active");
  }
});
document.getElementById("courses-btn").addEventListener("click", function () {
  document
    .getElementById("courses-section")
    .scrollIntoView({ behavior: "smooth" });
});
