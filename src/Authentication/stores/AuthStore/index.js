import {observable,action} from 'mobx';
import {API_INITIAL,API_SUCCESS,API_ERROR} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {setAccessToken} from '../../utils/StorageUtils';
import {getAccessToken} from '../../utils/StorageUtils';
import {clearUserSession} from '../../utils/StorageUtils';

class AuthStore {
    userName
    password
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    @observable getUserSignInAPIResponse
    @observable access_token
    authAPIService
    
    constructor(authAPIService){
        this.authAPIService = authAPIService;
        this.init();
    }
    
    @action.bound
    init(){
        this.getUserSignInAPIStatus = API_INITIAL;
        this.getUserSignInAPIError = null;
        this.getUserSignInAPIResponse = null;
        this.userName = "chinniraja";
        this.password = "chinna35";
        this.access_token = getAccessToken();
    }
    
    
    @action.bound
    getToken(){
        const usersPromise = this.authAPIService.signIn();
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUserSignInAPIStatus,this.setUserSignInAPIResponse)
        .catch(this.getUserSignInAPIError);
    }
    
    @action.bound
    setUserSignInAPIResponse(apiResponse){
        const access_token = apiResponse[0].access_token;
        setAccessToken(access_token);
        this.access_token = getAccessToken();
        this.getUserSignInAPIResponse = apiResponse;
    }
    
    @action.bound
    setUserSignInAPIStatus(apiStatus){
        this.getUserSignInAPIStatus = apiStatus;
    }
    
    @action.bound
    setUserSignInAPIError(apiError){
        this.getUserSignInAPIError = apiError;
    }
    
    @action.bound
    clearToken(){
        clearUserSession();
        this.init();
    }
}

export default AuthStore;