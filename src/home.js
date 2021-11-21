const attachToContainer = function (container) {
  container.appendChild(buildTitle());
  container.appendChild(buildWelcomeMsg());
  container.appendChild(buildHourInfo());
  container.appendChild(buildLocationInfo());
};

function buildTitle() {
  const title = document.createElement("div");
  title.classList = "home__title";
  title.textContent = "Home Title";
  return title;
}

export { attachToContainer };
