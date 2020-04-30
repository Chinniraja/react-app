import UserService from '../services/UserService/index.api';
import TodoService from '../services/TodoService/index.api';
import ProductAPIService from '../E-Commerce-App/services/ProductService/index.api.js';
import ProductStore from '../E-Commerce-App/stores/ProductStore/index';
import CartStore from '../E-Commerce-App/stores/CartStore/index';
import AuthService from '../Authentication/services/AuthService/index.api.js';
import AuthStore from '../Authentication/stores/AuthStore';
import UserStore from './UsersStore';
import TodoStore from './TodoStore';

const userService = new UserService();
const usersStore = new UserStore(userService);

const todoService = new TodoService();
const todosStore = new TodoStore(todoService);

const productService = new ProductAPIService();
const productStore = new ProductStore(productService);

const cartStore = new CartStore();


const authService = new AuthService();
const authStore = new AuthStore(authService);


export default {usersStore,todosStore,authStore,productStore,cartStore};