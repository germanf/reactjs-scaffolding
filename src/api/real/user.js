import Api from '../../utils/request';

const UserApiCalls = {

  getUser: () => Api.get('/users', true)

};

export default UserApiCalls;
