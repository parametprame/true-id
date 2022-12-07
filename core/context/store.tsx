import {
  createContext,
  useContext,
  useState,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import baseImage from "core/constants/BaseImage.json";

type Props = {
  children: ReactNode;
};

type ContextProps = {
  userInfo: UserInfo;
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
};

interface UserInfo {
  base: string;
  bg?: string;
  top?: string;
  shirt?: string;
}

const Context = createContext({} as ContextProps);

export function ContextProvider({ children }: Props): ReactElement {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    base: baseImage[0].base,
    bg: "",
    top: "",
    shirt: "",
  });

  return (
    <Context.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useUserContext(): ContextProps {
  return useContext(Context);
}
