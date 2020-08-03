import React, { useContext,useState } from "react";
import { GlobalState } from "../App";
import { TextField,Button } from "@material-ui/core";

const B = props =>{
  const globalState = useContext(GlobalState)
  const [title,setTitle] = useState('')
  const [info,setInfo] = useState('')
  const {todos} = globalState.state
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(title!=='' && info!==''){
      let newtodo = {
        title:title,
        info:info
      }
    todos.push(newtodo)
    globalState.dispatch({type:'CHANGE_TODOS',payload:todos})
    }
    

  } 


  return (
    <>
       <form noValidate autoComplete="on"> 
      <div>
        <TextField
          required
          id="outlined-required"
          label="Enter Todo"
         style={{margin:'4px'}}
          placeholder="Enter Todo"
          variant="outlined"
         onChange={(event)=>{
           console.log(event.currentTarget.value)
           setTitle(event.currentTarget.value)
          }}
        />
        <TextField 
        id="outlined-search"
        label="Info"
        style={{margin:'4px'}}
        variant="outlined"
        onChange={(event)=>{
          console.log(event.currentTarget.value)
          setInfo(event.currentTarget.value)
         }} />
         <Button type='submit' style={{margin:'9px'}} color='primary' variant='contained' onClick={handleSubmit}>Add</Button>
      </div>
      
    </form>


    </>

  )
}

export default B