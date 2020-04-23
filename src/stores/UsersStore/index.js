/*global fetch*/
import {observable,action} from 'mobx';
import {create} from 'apisauce';
import {API_INITIAL,API_FETCHING,API_SUCCESS,API_FAILED} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import UserService from '../../services/UserService/index.fixture';

class UserStore{
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    userService
    
    constructor(userService){
        this.userService = userService;
        this.init();
    }
    
    @action.bound 
    getUsers(){
        const usersPromise = this.userService.getUsers();
        // const api = create({
        //     baseURL: 'https://jsonplaceholder.typicode.com/',
        // });
        // const usersPromise = networkCallWithApisauce(api,'users/',{},apiMethods.get);
        // const usersPromise = fetch('https://jsonplaceholder.typicode.com/users');
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUsersAPIStatus,this.setUsersApiResponse)
        .catch(this.getUsersApiError);
        // .then((res) => res.json())
        // .then(this.setUsersApiResponse)
        // .catch(this.setUsersAPIError);
    }
    
    @action.bound
    setUsersApiResponse(usersResponse){
        this.users = usersResponse.map((user) => user.name);
    }
    
    @action.bound
    setUsersAPIStatus(apiStatus){
        this.getUsersApiStatus = apiStatus;
    }
    
    @action.bound
    setUsersAPIError(error){
        this.getUsersApiError = error;
    }
    
    @action
    init(){
        this.getUsersApiStatus = API_INITIAL;
        this.getUsersApiError = null;
        this.users = [];
    }
    
    @action
    clearStore(){
        this.init();
    }
}

// const userService = new UserService();
// const userStore = new UserStore(userService);
export default UserStore;