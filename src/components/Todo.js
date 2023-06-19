import React, { useState } from 'react'
import "./Style.css"
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import List from './List'

const Todo = () => {

  const [todo,setTodo] = useState  ("");

  const [add, setAdd] = useState([]);
  const setData = (e) =>{
    setTodo(e.target.value)
  }

  const additems = ()=>{

    setAdd(()=>{ 
      return [...add,todo]
    });
    setTodo("")
  };

  const dltitems = (id) =>{
    const dltdata = add.filter((el,ind)=>{
      return ind !== id;
    });
    
    setAdd(dltdata)
  };
    

  return (
   <>
   <div className='main-container'>
    <div className='todo-box'>
        <img src='./book.png' alt='todoimg' style={{borderRadius:"100%",marginLeft:"auto",marginRight:"auto",width:"25%",display:"block",marginTop:"20px",marginBottom:"25px"}}/> 
        <h2 className='heading'> Write Your Todo List Here</h2>
        <div className='input-container'>
          <input type='text'name='todo' onChange={setData} placeholder='Enter Your Task' id=''></input>
          <Tooltip title="Add">
          <Button className='addbtn' onClick={additems}> 
            <AddIcon/>
          </Button>
         </Tooltip>

 {/* i want button here how can i add */}
          
        </div>

<div className='store-container'>
  <ul>
    {
      add.map((ele, index)=>{
        return(
          <>
              <List id={index} text={ele} dltitems={dltitems}/>
          </>
        )
      })
    }
  
  </ul>
</div>

    </div>
   </div>
   </>
  )
}

export default Todo
