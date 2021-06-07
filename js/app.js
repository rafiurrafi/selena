const humbergar_menu = document.querySelector(".header__humbergar");
const headerMiniNav = document.querySelector(".header-mini-nav");
humbergar_menu.addEventListener("click", () => {
  headerMiniNav.classList.toggle("active");
});
