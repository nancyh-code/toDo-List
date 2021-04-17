import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo)); // Es igual a escribirtodoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList.todos);


