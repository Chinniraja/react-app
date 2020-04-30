import AuthService from '../services/AuthService/index.api.js';
import AuthStore from './AuthStore';

const authService = new AuthService();
const authStore = new AuthStore(authService);

export default {authStore};