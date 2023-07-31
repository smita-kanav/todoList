import React, { useState } from 'react';
import "../assets/style.css";
import {ApiCall} from "../apis/ApiCall";
import Grid from '@mui/material/Grid';
import { Formik, Form, Field} from "formik";

function AddTask(props) {

    const initialValues = {
        task: "",
        email: "",
        task_date: "",
        task_time: ""
      };
  return (
    <div  data-testid="todo-addtask">
    <Formik
   
    initialValues={initialValues}
    onSubmit= { async (values) => {
      
      const url = `/todo.php`;
      const value = {
        type: "Add",
        user_email: props.inputText,
        task: values.task,
        task_date: values.task_date,
        task_time: values.task_time
      }
     let response = await ApiCall(url,value);
     if(!response.success){
      alert(response.msg)
     } else {
      props.getList(props.inputText);
     }
        
    }}
      >
        {(values,handleChange) => (
          <Form>
             <Grid row  mt={2}>
              <Grid xs={12}>
           <h2 className="addtask-heading">Add Your TODO</h2><hr/>
           </Grid>
           </Grid>
            <Grid row  mt={2}>
              <Grid xs={12}>
                  <Field
                    type="text"
                    className="input-add-box-todo"
                    placeholder="Enter your task"
                    name="task"
                    // value={task[0][2]}
                    // onChange={handleChange}
                  />
              </Grid>
              </Grid>
              <Grid row  mt={2}>
              <Grid xs={12}>
                  <Field
                    type="date"
                    className="input-add-box-todo"
                    placeholder="Enter date"
                    name="task_date"
                  />
              </Grid>
            </Grid>

            <Grid row  mt={2}>
              <Grid xs={12}>
                  <Field
                    type="time"
                    min="2023-07-31"
                    className="input-add-box-todo buuble"
                    placeholder="Enter time"
                    name="task_time"
                  />
              </Grid>
            </Grid>
            <Grid row  mt={2}>
              <Grid xs={12}>
              <button className="add-btn" 
             type="submit">Add</button>  
              </Grid>
              </Grid>
              </Form>
        )}
      </Formik> 
      </div>
  )
}

export default AddTask