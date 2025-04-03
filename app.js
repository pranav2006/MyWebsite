const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close-icon');

menu.addEventListener("click", function () {
    sideBar.classList.add("open-sidebar");
    sideBar.classList.remove("close-sidebar");
});

close.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});
document.querySelector(".scroll-down").addEventListener("click", function() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    })
});