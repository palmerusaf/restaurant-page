import "./css/style.scss";

document.body.innerHTML = "<div id='content'></div>";

// Build navBar
(() => {
  document.body.appendChild(buildNavBar());

  function buildNavBar() {
    const navBar = document.createElement("nav");
    navBar.classList = "flex nav-bar";
    navBar.appendChild(buildListOfNavItems());
    return navBar;
  }

  function buildListOfNavItems(){
      const list=document.createElement('ul')
      list.appendChild
  }
})();
