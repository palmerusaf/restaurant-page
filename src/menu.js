import * as menuItems from "./menu-items.json";

// Load all imgs from img folder so json file can use imgs dynamically
let imgCache = {};
function importAll(r) {
  r.keys().forEach((key) => (imgCache[key] = r(key)));
}
importAll(require.context("./img/", true, /\.(png|svg|jpg|jpeg|gif)$/i));

const attachToContainer = function (container) {
  container.appendChild(buildMenu());
};

function buildMenu() {
  const container = document.createElement("div");
  container.classList = "flex-col menu";
  container.appendChild(buildTitle());
  container.appendChild(buildMenuList());
  return container;
}

function buildTitle() {
  const title = document.createElement("h1");
  title.classList = "home__title menu__title";
  title.textContent = "Menu";
  return title;
}

function buildMenuList() {
  const itemField = document.createElement("div");
  itemField.classList = "flex-col menu__item-field";
  menuItems.forEach((item) => {
    itemField.appendChild(buildItem(item));
  });
  return itemField;

  function buildItem(item) {
    const mainContainer = document.createElement("div");
    mainContainer.classList = "flex-row";
    if (menuItems.indexOf(item) % 2 == 0) {
      mainContainer.style.justifyContent = "left";
      mainContainer.appendChild(buildItemImage(item));
      mainContainer.appendChild(buildNameAndDescription(item));
    } else {
      mainContainer.appendChild(buildNameAndDescription(item));
      mainContainer.appendChild(buildItemImage(item));
    }
    return mainContainer;
  }

  function buildNameAndDescription(item) {
    const container = document.createElement("div");
    container.classList = "flex-col";
    container.appendChild(buildItemName(item));
    container.appendChild(buildItemDescription(item));
    return container;
  }

  function buildItemName(item) {
    const menuItemName = document.createElement("h2");
    menuItemName.classList = "home__title-category menu__item-name";
    menuItemName.textContent = item.name;
    return menuItemName;
  }

  function buildItemImage(item) {
    const itemImage = document.createElement("img");
    itemImage.classList = "menu__item-img";
    itemImage.src = imgCache[item.img];
    itemImage.alt = item.altText;
    return itemImage;
  }

  function buildItemDescription(item) {
    const itemDescription = document.createElement("div");
    itemDescription.classList = "menu__item-description location__address";
    itemDescription.textContent = item.description;
    return itemDescription;
  }
}

export { attachToContainer };
