import { createContext, FC, useReducer } from "react";
import { uiReducer } from ".";

interface UiContextProps {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
}

export const UiContext = createContext({} as UiContextProps);

export interface UiState {
  isSideBarOpen: boolean;
}

const UI_INIT_STATE: UiState = {
  isSideBarOpen: false,
};

export const UiProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INIT_STATE);

  const toggleSideBar = () => {
    dispatch({ type: "toggleSidebar" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        toggleSideBar,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
