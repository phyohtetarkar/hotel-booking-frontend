import { ReactNode, useEffect, useState } from "react";
import { AuthenticationContext, StateContext } from "./contexts";

export interface AuthUser {
  id: string;
  name: string;
  phone: string;
  verified: boolean;
}

export const AuthenticationContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [authUser, setAuthUser] = useState<StateContext<AuthUser>>({
    payload: undefined,
    status: "loading"
  });

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <AuthenticationContext.Provider value={authUser}>
      {children}
    </AuthenticationContext.Provider>
  );
};
