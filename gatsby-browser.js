require("./src/styles/global.scss");

exports.onServiceWorkerUpdateReady = () => {
  window.location.reload();
};
