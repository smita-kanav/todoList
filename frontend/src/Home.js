import React, { useState } from 'react'
import "./assets/style.css"
import Input from './components/Input';
import UpdateTask from './components/UpdateTask';
import AddTask from './components/AddTask';
import List from './components/List';
import axios from "axios";
import {ApiCall} from "./apis/ApiCall";
import Grid from '@mui/material/Grid';

function Home() {
  const [showList,setShowList]=useState(false);
  const [showAddTaskBlock,setShowAddTaskBlock]=useState(0);
  const [showData,setShowData]=useState([]);
  const [showTodayData,setShowTodayData]=useState([]);
  const [inputText,setInputText] = useState('');
  const [loading,setLoading] = useState('');
  const [task,setTask] = useState([]);
  

  let getList = (inputText)=>{
    if(inputText!==''){
      const url = `${process.env.REACT_APP_API_URL}/getTasks.php`;
      const val = `email=${inputText}`;
      axios.post(url,val).then((response) => {
        if(response?.data?.success){
          setShowData(response.data.data)
          setShowList(true)
          setShowAddTaskBlock(1)
        } else if(response.data.msg === "User Does not exist."){
          setShowData([])
          setShowList(false)
          setLoading(response.data.msg)
        } else {
          setShowData([])
          setLoading(response.data.msg)
          setShowAddTaskBlock(1)
        }
      }).catch((errors) => {
        console.log("API Error", errors);
      });
      getTodayList(inputText);}
  }

  let getTodayList = async (inputText)=>{
      const url1 =`${process.env.REACT_APP_API_URL}/getTodayTasks.php`;
      const date = new Date();
      const day = String(date.getDate()).padStart(2,'0');
      const month = String(date.getMonth()+1).padStart(2,'0');
      const year = date.getFullYear();
      const currentDate = `${day}-${month}-${year}`;
      const val1 = `email=${inputText}&date=${currentDate}`;
     await axios.post(url1,val1).then((response) => {
        if(response?.data?.success){
          setShowTodayData(response.data.data);
        } else {setShowTodayData([])}
      }).catch((errors) => {
        console.log("API Error", errors);
      });
  }
  
  async  function  editListItem(key){
    const url = `/todo.php`;
    const value = {
      type: "getTask",
      id: key
    }
    let response = await ApiCall(url,value);
    console.log("data=",response.data[0])
    if(response?.success){
      setTask(response.data[0]);
      setShowAddTaskBlock(2);
    } else {console.log("API Error", response);}
    
  }
  async  function  deleteListItem(key){
    const url = `/todo.php`;
    const value = {
      type: "Delete",
      id: key
    }
    let response = await ApiCall(url,value);
    getList(inputText);
  }

  return (
    <>
    <Grid container mt={4} width="400px">
      <Grid xs={12} lg={12} md={12} p={4}>
            <Input getList={getList} inputText={inputText} setInputText={setInputText} /> 
      </Grid>
    </Grid>
    <Grid container mt={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
      <Grid xs={12} lg={6} md={6} p={6}>
    
          {(showList)?
            <>
              <h1 className="app-heading">TODO</h1>
              <hr/>
              {showData.map((listItem,i)=>{
                return (
                  <List key={i} listItem={listItem} index={listItem[2]} item={listItem[2]} deleteItem={deleteListItem} editItem={editListItem}/>
                )
              })}
            </>
            :
              <h4 className="app-heading">{loading}</h4>
            }
            {(showAddTaskBlock === 1)&&
              <div className="addtask-container">
                <AddTask inputText={inputText} getList={getList} />  
              </div>
            }

            {(showAddTaskBlock === 2)&&
                <div className="addtask-container">
                  <UpdateTask task={task} setShowAddTaskBlock={setShowAddTaskBlock} inputText={inputText} getList={getList}  />   
                </div>
            }
      </Grid>
      <Grid xs={12} lg={6} md={6} p={6}>
          {(showList)&&
              <>
                      <h1 className="app-heading ">Today's Schedule</h1><hr/>
                      
                      {(showTodayData.length !== 0)? showTodayData.map((listItem,i)=>{
                      return (
                        <List key={i} listItem={listItem} index={listItem[2]} item={listItem[2]} deleteItem={deleteListItem} editItem={editListItem}/>
                        
                      )
                    }):
                    <h4 className="app-heading today-sech">No Task Scheduled For Today.</h4>
                  }
              </>
          }
      </Grid>
    </Grid>
    </>
  )
}

export default Home