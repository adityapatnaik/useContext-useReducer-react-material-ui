import React, { useContext } from "react";
import { GlobalState } from "../App";
import { Button } from "@material-ui/core";

const A = props => {
  const globalState = useContext(GlobalState);
  return (
    <>
      <Button
        color={"primary"}
        variant="outlined"
        onClick={() => {
          globalState.dispatch({
            type: "CHANGE_COUNTER",
            payload: globalState.state.counter + 1
          });
        }}
      >
        +
      </Button>
      <Button 
      color={"primary"}
      variant="outlined"
      onClick={() => {
        globalState.dispatch({
          type: "CHANGE_COUNTER",
          payload: globalState.state.counter - 1
        });
      }}>
        -
      </Button>
    </>
  );
};

export default A;
