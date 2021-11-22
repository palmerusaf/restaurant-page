const attachToContainer = function (container) {
  container.appendChild(buildContactInfo());
};
function buildContactInfo() {
  const container = document.createElement("div");
  container.classList = "flex-col contact";
  container.appendChild(buildTitle());
  container.appendChild(buildContactField());
  return container;

  function buildTitle() {
    const title = document.createElement("h1");
    title.classList = "contact__title";
    title.textContent = "Contact Us";
    return title;
  }

  function buildContactField() {
    const contactField = document.createElement("div");
    contactField.classList = "flex-col contact__field";
    contactField.appendChild(buildContact(image, content));
    return contactField;

  }
}
export { attachToContainer };
