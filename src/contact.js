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
    const contactField = document.createElement("ul");
    contactField.classList = "flex-col contact__field";
    contactField.appendChild(buildContact(image, content, link));
    return contactField;

    function buildContact(logoSource, content, link) {
      const contact = document.createElement("li");
      contact.classList = "flex contact__item";

      if (logoSource) contact.appendChild(buildLogo(logoSource));
      if (link) contact.appendChild(buildLink(content, link));
      else contact.textContent = content;
      return contact;

      function buildLogo(logoSource) {
        const logo = document.createElement("img");
        logo.classList = "contact__logo";
        logo.alt = "contact logo";
        logo.src = logoSource;
        return logo;
      }

      function buildLink(content, link) {
        const contentLink = document.createElement("a");
        contentLink.href = link;
        contentLink.textContent = content;
        return contentLink;
      }
    }
  }
}
export { attachToContainer };
