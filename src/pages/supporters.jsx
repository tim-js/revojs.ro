import { useEffect } from "react";
import { navigate } from "gatsby";
import { currentEdition } from "@utils";

const Supporters = () => {
  useEffect(() => {
    navigate(`/${currentEdition}/supporters/`);
  }, []);
  return null;
};

export default Supporters;
