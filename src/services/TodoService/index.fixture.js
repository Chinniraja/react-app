import usersResponse from '../../fixtures/getTodosResponse.json';

class TodoFixtureService {
    getTodos(){
        return new Promise((resolve,reject) => {
            resolve(usersResponse);
        });
    }
}

export default TodoFixtureService;