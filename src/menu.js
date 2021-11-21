const attachToContainer = function (container) {
  container.appendChild(buildTitle())
  container.appendChild(buildMenuList())
};

function buildTitle() {
  const title = document.createElement("h1");
  title.classList = "Home__title Menu__title";
  title.textContent = "Menu";
  return title;
}

export { attachToContainer };
