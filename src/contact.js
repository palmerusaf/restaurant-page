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

    function buildContact(logoSource, content) {
      const contact = document.createElement("span");
      contact.classList = "flex contact__item";

      if (logoSource) contact.appendChild(buildLogo());
      contact.textContent = content;
      return contact;

      function buildLogo() {
        const logo = document.createElement("img");
        logo.classList = "contact__logo";
        logo.alt = "contact logo";
        logo.src = logoSource;
        return logo;
      }
    }
  }
}
export { attachToContainer };
