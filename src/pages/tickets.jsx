import { useEffect } from "react";
import { navigate } from "gatsby";
import { currentEdition } from "@utils";

const Tickets = () => {
  useEffect(() => {
    navigate(`/${currentEdition}/tickets/`);
  }, []);
  return null;
};

export default Tickets;
