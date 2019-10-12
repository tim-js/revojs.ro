import * as pages2019 from "@data/2019/pages";
import * as pages2020 from "@data/2020/pages";

export function getYearFromUrl(url) {
  return url.split(/[^\d]/).filter(function(n) {
    if (n >= 2019 && n <= 2099) return n;
    return undefined;
  })[0];
}

export const currentEdition = 2019;

export function getEdition() {
  const year = getYearFromUrl(window.location.pathname) || currentEdition;
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
