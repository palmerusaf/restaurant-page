import "./css/style.scss";

document.body.classList = "flex-col";
document.body.innerHTML = "<div id='content' class='flex-col'></div>";

// Build navBar
(() => {
  document.getElementById("content").appendChild(buildNavBar());

  function buildNavBar() {
    const navBar = document.createElement("nav");
    navBar.classList = "flex nav-bar";
    navBar.appendChild(buildListOfNavItems());
    return navBar;
  }

  function buildListOfNavItems() {
    const list = document.createElement("ul");
    list.appendChild(buildNavItem("Home"));
    list.appendChild(buildNavItem("Menu"));
    list.appendChild(buildNavItem("Contact"));
    return list;
  }

  function buildNavItem(text) {
    const item = document.createElement("li");
    item.classList = "nav-bar__item";
    item.textContent = text;
    item.addEventListener("click",(e)=>console.log(e));
    return item;
  }
})();
