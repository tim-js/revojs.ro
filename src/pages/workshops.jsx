import { useEffect } from "react";
import { navigate } from "gatsby";
import { currentEdition } from "@utils";

const Workshops = () => {
  useEffect(() => {
    navigate(`/${currentEdition}/workshops/`);
  }, []);
  return null;
};

export default Workshops;
