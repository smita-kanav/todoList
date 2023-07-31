import { render, screen } from '@testing-library/react';
import AddTask from '../AddTask';

test('renders AddTask task', () => {

  let inputText = "";
  async  function  getList(inputText){
    
  }
  
  render(<AddTask inputText={inputText} getList={getList} />);
  const todoElement = screen.getByTestId('todo-addtask');
  expect(todoElement).toBeInTheDocument();
});
