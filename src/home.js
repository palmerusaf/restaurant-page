const attachToContainer = function (container) {
  container.appendChild(buildTitle());
  container.appendChild(buildWelcomeMsg());
  container.appendChild(buildHourInfo());
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

function buildHourInfo() {
  const container = document.createElement("div");
  container.classList = "hour";
  const list = document.createElement("ul");
  list.classList = "flex-col hour__list";
  list.appendChild(buildHourItemWithContent("Monday"));
  list.appendChild(buildHourItemWithContent("Tuesday"));
  list.appendChild(buildHourItemWithContent("Wednesday"));
  list.appendChild(buildHourItemWithContent("Thursday"));
  list.appendChild(buildHourItemWithContent("Friday"));
  list.appendChild(buildHourItemWithContent("Saturday"));
  list.appendChild(buildHourItemWithContent("Sunday"));
  container.appendChild(list);
  return container;

  function buildHourItemWithContent(content) {
    const span = document.createElement("li");
    span.classList = "hour__list-item";
    span.textContent = content;
    return span;
  }
}

export { attachToContainer };
