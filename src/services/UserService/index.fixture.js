import usersResponse from '../../fixtures/getUsersResponse.json';

class UserFixtureService {
    getUsers(){
        return new Promise((resolve,reject) => {
            resolve(usersResponse);
        });
    }
}

export default UserFixtureService;