import { useContext } from "react";
import { ApplicationContext } from "./ApplicationProvider";

const useApplication = () => useContext(ApplicationContext);

export default useApplication;
