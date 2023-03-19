import { useEffect } from "react";
import { navigate } from "gatsby";
import { currentEdition } from "@utils";

const Agenda = () => {
  useEffect(() => {
    navigate(`/${currentEdition}/agenda/`);
  }, []);
  return null;
};

export default Agenda;
