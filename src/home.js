const attachToContainer = function (container) {
  container.appendChild(buildTitle());
  container.appendChild(buildWelcomeMsg());
  // container.appendChild(buildHourInfo());
  // container.appendChild(buildLocationInfo());
};

function buildTitle() {
  const title = document.createElement("div");
  title.classList = "home__title";
  title.textContent = "Home Title";
  return title;
}

function buildWelcomeMsg() {
  const container = document.createElement("div");
  container.classList = "flex-col home__welcome-container";
  const message = document.createElement("p");
  message.classList = "home__welcome-msg";
  message.textContent =
    "Adipisicing consectetur cillum sit magna do velit ut fugiat nisi. Laborum excepteur ullamco ex in ipsum quis consequat amet incididunt anim. Ex exercitation laborum cillum qui dolor excepteur dolor consectetur. Nulla proident ut dolore non irure eu dolore aliqua consectetur laboris nisi cillum in.";
  container.appendChild(message);
  return container;
}

export { attachToContainer };
