import { useEffect } from "react";
import { navigate } from "gatsby";
import { currentEdition } from "@utils";

const Venue = () => {
  useEffect(() => {
    navigate(`/${currentEdition}/venue/`);
  }, []);
  return null;
};

export default Venue;
