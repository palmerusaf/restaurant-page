import chickenLogo from "./logos/chicken-logo.png"
import githubLogo from "./logos/github-logo.png"
import phoneLogo from "./logos/phone-logo.png"

const attachToContainer = function (container) {
  container.appendChild(contactInfoBuilder());
};
function contactInfoBuilder() {
  const container = document.createElement("div");
  container.classList = "flex-col contact";
  container.appendChild(titleBuilder());
  container.appendChild(contactFieldBuilder());
  return container;

  function titleBuilder() {
    const title = document.createElement("h1");
    title.classList = "contact__title";
    title.textContent = "Contact Us";
    return title;
  }

  function contactFieldBuilder() {
    const contactField = document.createElement("ul");
    contactField.classList = "flex-col contact__field";
    contactField.appendChild(contactBuilder(image, content, link));
    return contactField;

    function contactBuilder(logoSource, content, link) {
      const contact = document.createElement("li");
      contact.classList = "flex contact__item";

      if (logoSource) contact.appendChild(logoBuilder(logoSource));
      if (link) contact.appendChild(linkBuilder(content, link));
      else contact.textContent = content;
      return contact;

      function logoBuilder(logoSource) {
        const logo = document.createElement("img");
        logo.classList = "contact__logo";
        logo.alt = "contact logo";
        logo.src = logoSource;
        return logo;
      }

      function linkBuilder(content, link) {
        const contentLink = document.createElement("a");
        contentLink.href = link;
        contentLink.textContent = content;
        return contentLink;
      }
    }
  }
}
export { attachToContainer };
