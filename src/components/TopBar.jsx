import React, { useContext } from "react";
import { GlobalState } from "../App";
import { AppBar,Toolbar,Typography,IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


const TopBar = props =>{

  const globalState = useContext(GlobalState)

  return(
    <AppBar position="static">
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
        {globalState.state.title}
      </Typography>
    </Toolbar>
  </AppBar>
  )


}

export default TopBar