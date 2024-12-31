import { useState } from "react";
import { signout } from "../services/auth-service";
import { useAuthContext } from "./useAuthContext";

export const useSignout = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const { updateAuth } = useAuthContext();

  const logout = () => {
    setLoader(true);
    signout()
      .then((response) => {
        if (response && response.status === 204) {
          localStorage.clear();
          updateAuth(false);
        }
        console.log(response);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false));
  };

  return { logout };
};
