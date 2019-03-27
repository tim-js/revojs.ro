require("./src/styles/variables.css");
require("./src/styles/global.scss");

exports.onServiceWorkerUpdateReady = () => {
  window.location.reload();
};

exports.onInitialClientRender = () => {
  window.addEventListener("scroll", () => {
    document
      .querySelector("body")
      .classList.toggle("is-scrolled", window.scrollY > 80);
  });
};
