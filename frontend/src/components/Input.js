import React,{useState} from "react";

function Input(props) {
   
  return (
    <div data-testid="input-todo" className="input-container">
      <input
                type="text"
                className="input-box-todo"
                placeholder="Enter your email"
                value={props.inputText}
                onChange={e=>{
                  props.setInputText(e.target.value)
                  }}
              />
              <button className="show-btn" 
              onClick={()=>{
                console.log("email=",props.inputText)
                props.getList(props.inputText)
                
              }}>search</button>      
    </div>
  );
}

export default Input;