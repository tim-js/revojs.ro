require("./src/styles/global.css");

exports.onServiceWorkerUpdateReady = () => {
  window.location.reload();
};
