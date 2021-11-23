const attachToContainer = function (container) {
  container.appendChild(buildTitle());
  container.appendChild(buildWelcomeMsg());
  container.appendChild(buildHourInfo());
  container.appendChild(buildLocationInfo());
};

function buildTitle() {
  const title = document.createElement("h1");
  title.classList = "home__title";
  title.textContent = "Café Under the";
  const span = document.createElement("span");
  span.classList = "home__title home__title--tree";
  span.textContent = "Tree";
  title.appendChild(span);
  return title;
}

function buildWelcomeMsg() {
  const container = document.createElement("div");
  container.classList = "flex-col home__welcome-container";
  const message = document.createElement("p");
  message.classList = "home__welcome-msg";
  message.textContent =
    "Welcome our website. We specialize in Thai-fusion. Also, visit us and treat yourself to one of our specialty coffee infused drinks. We look forward to seeing you. Check out our menu above and feel free to contact us.";
  container.appendChild(message);
  return container;
}

function buildHourInfo() {
  const container = document.createElement("div");
  container.classList = "flex-col hour";
  const title = buildCategoryTitle("Hours");
  title.classList.add("hour__title");
  container.appendChild(title);
  container.appendChild(buildList());
  return container;

  function buildList() {
    const listTextContent = [
      { day: "Tuesday", hours: "8:00am-5:00pm" },
      { day: "Wednesday", hours: "8:00am-5:00pm" },
      { day: "Thursday", hours: "8:00am-5:00pm" },
      { day: "Friday", hours: "8:00am-5:00pm" },
      { day: "Saturday", hours: "8:00am-5:00pm" },
      { day: "Sunday", hours: "8:00am-5:00pm" },
      { day: "Monday", hours: "closed" },
    ];
    const list = document.createElement("ul");
    list.classList = "flex-col hour__list";
    listTextContent.forEach((textContentItem) =>
      list.appendChild(buildHourItemWithContent(textContentItem))
    );
    return list;
  }

  function buildHourItemWithContent(content) {
    const container = document.createElement("li");
    const day = document.createElement("span");
    day.textContent = content.day;
    const hours = document.createElement("span");
    hours.textContent = content.hours;
    container.appendChild(day);
    container.appendChild(hours);
    container.classList = "flex-row hour__list-item";
    return container;
  }
}

function buildLocationInfo() {
  const container = document.createElement("div");
  container.classList = "flex-col location";
  container.appendChild(buildCategoryTitle("Location"));
  container.appendChild(buildAddress());
  return container;

  function buildAddress() {
    const address = document.createElement("address");
    address.classList = "location__address";
    address.innerHTML = "1234 Fake Street<br>Fake City, NA 1234<br>USSAR";
    return address;
  }
}

function buildCategoryTitle(title) {
  const h2 = document.createElement("h2");
  h2.classList = "home__title-category";
  h2.textContent = title;
  return h2;
}

export { attachToContainer };
