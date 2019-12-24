import * as pages2019 from "@data/2019/pages";
import * as pages2020 from "@data/2020/pages";
import { globalHistory } from "@reach/router";

export function getYearFromUrl(url) {
  if (!url) {
    return;
  }
  return url.split("/").filter(function(n) {
    if (+n >= 2019 && +n <= 2099) return n;
    return undefined;
  })[0];
}

export const currentEdition = 2020;

export function getEdition() {
  const pathname = globalHistory.location.pathname;
  const editionFromUrl = getYearFromUrl(pathname);
  let editionFromStorage;

  if (typeof sessionStorage !== "undefined") {
    if (pathname === "/") {
      sessionStorage.removeItem("revojs-edition");
    } else if (editionFromUrl) {
      sessionStorage.setItem("revojs-edition", editionFromUrl);
    } else {
      editionFromStorage = sessionStorage.getItem("revojs-edition");
    }
  }

  const year =
    getYearFromUrl(editionFromUrl) || editionFromStorage || currentEdition;

  return +year;
}

export function getPages() {
  const edition = +getEdition();
  switch (edition) {
    case 2019:
      return pages2019;
    default:
      return pages2020;
  }
}
