import * as menuItems from "./menu-items.json";

// Load all images so json file can use dynamically
let imgCache = {};
function importAll(r) {
  r.keys().forEach((key) => (imgCache[key] = r(key)));
}
importAll(require.context("./img/", true, /\.(png|svg|jpg|jpeg|gif)$/i));

// const chickImg = document.createElement("img");
// chickImg.id="chick"

// chickImg.src = imgCache[menuItems[0].img];
// document.body.appendChild(chickImg);


// console.log(imgCache[menuItems[0].img])

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
    itemField.appendChild(buildItemName(item));
    itemField.appendChild(buildItemImage(item));
    // itemField.appendChild(buildItemDescription(item));
  });
  return itemField;

  function buildItemName(item) {
    const h2 = document.createElement("h2");
    h2.classList = "menu__item-name";
    h2.textContent = item.name;
    return h2;
  }

  function buildItemImage(item) {
    const img = document.createElement("img");
    img.classList = "menu__item-img";
    img.src=imgCache[menuItems[0].img];
    img.alt = item.altText;
    return img;
  }
}

export { attachToContainer };
