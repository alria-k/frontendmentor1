function burgerMenu(burger, menu, overlay) {
  const burgerBtn = document.querySelector(burger),
    burgerMenu = document.querySelector(menu),
    burgerOverlay = document.querySelector(overlay);
  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger__menu-open");
    burgerOverlay.classList.toggle("hide");
    burgerBtn.classList.toggle("burger__cross");
  });
}

burgerMenu(".burger span", ".burger__menu", ".overlay");
