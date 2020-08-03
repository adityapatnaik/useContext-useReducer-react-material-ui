import React, { useContext } from 'react';
import { GlobalState } from "../App";
//import { makeStyles } from '@material-ui/core/styles';
import {Avatar,List,Badge,Typography,Divider,ListItem,ListItemText,ListItemAvatar} from '@material-ui/core';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const AList = props =>{
  const globalState = useContext(GlobalState)
  const {todos} = globalState.state
  return(
    <List>
      {todos.map(elem=>{
          return <> 
          <ListItem id={elem.title} alignItems="flex-start" onClick={(event)=>{
              console.log(event.currentTarget.id)
              let ntodo= todos.filter(ele=>ele.title!==event.currentTarget.id)
              console.log(ntodo)
              globalState.dispatch({type:'CHANGE_TODOS',payload:ntodo})
          }}>
          <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon/>
          </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={elem.title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                 style={{display:"inline"}}
                >
                {elem.info}
                </Typography>
                
                {'...'+new Date().toDateString()+"  "}
                
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" /> 
        </>
        })}
        
    </List>
  )
}

export default AList