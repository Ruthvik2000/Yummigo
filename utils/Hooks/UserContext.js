import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default Value", //Default Value 
});

export default UserContext;