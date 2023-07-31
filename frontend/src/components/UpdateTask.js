import React, { useState } from 'react';
import "../assets/style.css";
import {ApiCall} from "../apis/ApiCall";
import Grid from '@mui/material/Grid';
import { Formik, Form, Field} from "formik";

function UpdateTask(props) {
console.log("data 1",props.task)
    let initialUpdateValues = {
        task: props.task[2],
        task_date: props.task[3],
        task_time: props.task[4]
      };
  return (
    <div  data-testid="todo-updatetask">
    <Formik
        enableReinitialize
        initialValues={initialUpdateValues}
        onSubmit= { async (values) => {
          const value = {
            id: props.task[0],
            type: "Update",
            task: values.task,
            task_date: values.task_date,
            task_time: values.task_time
          }
          const url = `/todo.php`;
          let response = await ApiCall(url,value);
          if(!response.success){
            alert(response.msg)
           } else {
            props.getList(props.inputText);
            props.setShowAddTaskBlock(1)
           }
            
          
        }}
      >
        {(values,handleChange) => (
          <Form>
             <Grid row  mt={2}>
              <Grid xs={12}>
           <h2 className="addtask-heading">Update Your TODO</h2><hr/>
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
                    className="input-add-box-todo buuble"
                    placeholder="Enter time"
                    name="task_time"
                  />
              </Grid>
            </Grid>
            <Grid row  mt={2}>
              <Grid xs={12}>
              <button className="add-btn" 
             type="submit">Update</button>  
              </Grid>
              </Grid>
              </Form>
        )}
      </Formik> 
      </div>
  )
}

export default UpdateTask