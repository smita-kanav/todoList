import { render, screen } from '@testing-library/react';
import Input from '../Input';

test('renders Input task', () => {

  let inputText = "";
  let i = 1;
  let setInputText;

  let getList = (inputText)=>{
  }
 
  render(<Input getList={getList} inputText={inputText} setInputText={setInputText} /> );
  const todoElement = screen.getByTestId('input-todo');
  expect(todoElement).toBeInTheDocument();
});
