import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';

class TodoService {
    api
    constructor(){
        this.api = create({
            baseURL:"https://jsonplaceholder.typicode.com/"
            // baseURL:"https://5e6864ded426c00016b7cfce.mockapi.io/api/v1/"
        });
    }
    
    getTodos(){
        return networkCallWithApisauce(this.api,'todos/',{},apiMethods.get);
    }
    
    postTodos(todo){
        return networkCallWithApisauce(this.api,'users123/',todo,apiMethods.post);
    }
}

export default TodoService;