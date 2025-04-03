const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close-icon');

menu.addEventListener("click", function () {
    sideBar.classList.add("open-sidebar"); // Open sidebar
    sideBar.classList.remove("close-sidebar"); // Ensure close animation is removed
});

close.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar"); // Fix: Remove open class
    sideBar.classList.add("close-sidebar");
});