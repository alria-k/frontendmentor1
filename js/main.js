function tabsOpen(desctopTab, desctopOpen) {
  const tabs = document.querySelectorAll(desctopTab);
  const openTab = document.querySelectorAll(desctopOpen);
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (e) => {
      tabs[i].classList.toggle("nav__item-focus");
      for (let v = 0; v < openTab.length; v++) {
        if (i == v) {
          openTab[v].classList.toggle("hide");
        }
      }
    });
  }
}

tabsOpen(".tabs", ".open");
