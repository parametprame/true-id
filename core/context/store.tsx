import {
  createContext,
  useContext,
  useState,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";

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
    base: "https://image-true-id.s3.ap-northeast-1.amazonaws.com/eac5af25-8474-4037-a1ab-163e58ebb842-base.PNG",
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
