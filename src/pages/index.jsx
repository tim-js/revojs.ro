import { useEffect } from "react";
import { navigate } from "gatsby";
import { currentEdition } from "@utils";

const Index = () => {
  useEffect(() => {
    navigate(`/${currentEdition}/`, { replace: true });
  }, []);
  return null;
};

export default Index;
