import { useContext } from "react";
import AuthContext from "../context/authContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  const auth = authContext.isAuthenticated;

  const setAuth  = value => {
    if (value) {
      authContext.login()
    } else {
      authContext.logout()
    }
  }


  return [auth, setAuth];
}