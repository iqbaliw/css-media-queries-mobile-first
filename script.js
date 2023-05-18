toggleMenu();

function toggleMenu() {
    const ulMenu = document.querySelector("ul.menu");
    const toggleMenu = document.getElementById("showMenu");

    toggleMenu.addEventListener("click", function () {
        ulMenu.classList.toggle("active");
    });
}
