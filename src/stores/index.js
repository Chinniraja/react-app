import UserService from '../services/UserService/index.api';
import TodoService from '../services/TodoService/index.api';
import UserStore from './UsersStore';
import TodoStore from './TodoStore';

const userService = new UserService();
const usersStore = new UserStore(userService);

const todoService = new TodoService();
const todosStore = new TodoStore(todoService);

export default {usersStore,todosStore};