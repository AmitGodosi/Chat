import { createContext, useReducer } from "react";
import ConversationReducer from "./ConversationReducer";

const INITAL_STATE = {
  openConversation: {},
  userOpenConversation: {},
  openConversationMessages: [],
};

export const ConversationContext = createContext(INITAL_STATE);

export const ConversationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ConversationReducer, INITAL_STATE);

  return (
    <ConversationContext.Provider
      value={{
        openConversation: state.openConversation,
        userOpenConversation: state.userOpenConversation,
        openConversationMessages: state.openConversationMessages,
        dispatch,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};
