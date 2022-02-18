//hidden menu content in home screen when view in mobile
const toggle1 = document.querySelector(".menutoggle");
const Menu = document.querySelector(".navMenu");
let menuOpen = false;
toggle1.addEventListener('click', () => {
    if (!menuOpen) {
        toggle1.classList.add('active');
        menuOpen = true;
        Menu.style.display = "block";
    } else {
        toggle1.classList.remove('active');
        menuOpen = false;
        Menu.style.display = "none";
    }
    console.log(menuOpen);
});

