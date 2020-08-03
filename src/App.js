import React, { createContext, useReducer } from "react";
//import A from './components/A'
import B from "./components/B";
import AList from "./components/AList";
import TopBar from "./components/TopBar";
import "./styles.css";

export const GlobalState = createContext();

const initialState = {
  array: ["Hey", "Ho", "Haa"],
  todos: [
    {
      title: "Ask Marry out for dinner",
      info: "Take her to France la Temptations"
    },
    {
      title: "Finish Project Mys",
      info: "Update Fiesta Component..."
    },
    {
      title: "Wake up at 5am",
      info: "Plan your day..."
    },
    {
      title: "Excersise for 20mins",
      info: "10mins hit,10mins yoga"
    }
  ],
  counter: 0,
  title: "useReducer with Context API"
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COUNTER":
      return { ...state, counter: action.payload };
    case "CHANGE_TODOS":
      return { ...state, todos: action.payload };
    case "CHANGE_TITLE":
      return { ...state, title: action.payload };
    default:
      return 0;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalState.Provider value={{ state: state, dispatch: dispatch }}>
      <div className="App">
        <TopBar />
        <AList />
        <B />
      </div>
    </GlobalState.Provider>
  );
}
