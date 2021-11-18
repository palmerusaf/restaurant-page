import "./css/style.scss";

document.body.classList = "flex-col";
document.body.innerHTML = "<div id='content' class='flex-col'></div>";

// Build navBar
(() => {
  document.getElementById("content").appendChild(buildNavBar());

  function buildNavBar() {
    const navBar = document.createElement("nav");
    navBar.classList = "flex nav-bar";
    navBar.appendChild(buildListOfNavButtons());
    return navBar;
  }

  function buildListOfNavButtons() {
    const list = document.createElement("ul");
    list.appendChild(buildNavButton("Home"));
    list.appendChild(buildNavButton("Menu"));
    list.appendChild(buildNavButton("Contact"));
    return list;
  }

  function buildNavButton(text) {
    const item = document.createElement("li");
    item.classList = "nav-bar__item";
    if (text === "Home") item.classList.add("nav-bar__item--active");
    item.textContent = text;
    item.addEventListener("click", handleNavButtonClick);
    return item;
  }
  function handleNavButtonClick(event) {
    const navButton = event.target;
    switchActiveNavButton(navButton);
    console.log(navButton);
  }
  function switchActiveNavButton(button) {
    const oldActiveButton = document.querySelector(".nav-bar__item--active");
    oldActiveButton.classList.remove("nav-bar__item--active");
    button.classList.add("nav-bar__item--active");
  }
})();
