import { render, screen } from '@testing-library/react';
import List from '../List';

test('renders list task', () => {

  let listItem = [];
  let i = 1;
  async  function  editListItem(key){
    
  }
  async  function  deleteListItem(key){
    
  }
  render(<List key={i} listItem={listItem} index={listItem[0]} item={listItem[0]} deleteItem={deleteListItem} editItem={editListItem} />);
  const todoElement = screen.getByTestId('list-todo');
  expect(todoElement).toBeInTheDocument();
});
