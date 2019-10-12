import { useEffect } from "react";
import { navigate } from "gatsby";
import { currentEdition } from "@utils";

export default () => {
  useEffect(() => {
    navigate(`/${currentEdition}/workshops/`);
  }, []);
  return null;
};
