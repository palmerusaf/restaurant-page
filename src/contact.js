const attachToContainer = function (container) {
  container.appendChild(buildContactInfo());
};
function buildContactInfo() {
  const container = document.createElement("div");
  container.classList = "flex-col contact";
  container.appendChild(buildTitle());
  container.appendChild(buildContactField());
  return container;
}
export { attachToContainer };
