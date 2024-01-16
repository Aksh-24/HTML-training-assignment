let sidebar = document.getElementById("sidebar");
let menuBtn = document.getElementById("menuBtn");
let flag = true;

if (screen.availWidth < 992) {
  flag = false;
}
menuBtn.addEventListener("click", () => {
  console.log("I am call");
  if (!flag) {
    sidebar.style.maxWidth = "300px";
    sidebar.style.transform = "translateX(0%)";
  } else {
    sidebar.style.maxWidth = "0px";
    sidebar.style.transform = "translateX(-100%)";
  }
  flag = !flag;
});