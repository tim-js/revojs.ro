import { useEffect } from "react";
import { navigate } from "gatsby";
import { currentEdition } from "@utils";

const Speakers = () => {
  useEffect(() => {
    navigate(`/${currentEdition}/speakers/`);
  }, []);
  return null;
};

export default Speakers;
