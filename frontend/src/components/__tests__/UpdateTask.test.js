import { render, screen } from '@testing-library/react';
import UpdateTask from '../UpdateTask';

test('renders AddTask task', () => {

  let inputText = "";
  let task = [[]];
  function setShowAddTaskBlock(){};
  async  function  getList(inputText){
    
  }
  
  render(<UpdateTask task={task} setShowAddTaskBlock={setShowAddTaskBlock} inputText={inputText} getList={getList}  />   );
  const todoElement = screen.getByTestId('todo-updatetask');
  expect(todoElement).toBeInTheDocument();
});
