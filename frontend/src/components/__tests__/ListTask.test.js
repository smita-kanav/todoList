import { render, screen } from '@testing-library/react';
import ListTask from '../ListTask';

test('renders listing task', () => {

 const todo = {id:'2', title:'wash dish'};
  render(<ListTask todo={todo} />);
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash dish');
});
