const toggle1 = document.querySelector(".menutoggle");
const Menu = document.querySelector(".navMenu");
let menuOpen = false;
toggle1.addEventListener('click', () => {
    if (!menuOpen) {
        toggle1.classList.add('active');
        menuOpen = true;
        Menu.style.display = "none";
    } else {
        toggle1.classList.remove('active');
        menuOpen = false;
        Menu.style.display = "block";
    }
    console.log(menuOpen);
});