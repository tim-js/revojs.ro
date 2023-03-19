import { useEffect } from "react";
import { navigate } from "gatsby";
import { currentEdition } from "@utils";

const Organizers = () => {
  useEffect(() => {
    navigate(`/${currentEdition}/organizers/`);
  }, []);
  return null;
};

export default Organizers;
