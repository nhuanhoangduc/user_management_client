import axios from 'axios';
import Configs from '../configs';


export const UserApi = {
    getUsers: async function () {
        try {
            const response = await axios.get(Configs.API_URL + Configs.USER_API_ENDPOINT);
            const users = response.data;
            return users;
        } catch (error) {

        }
    },

    deleteUser: async function (userId) {
        try {
            const response = await axios.delete(Configs.API_URL + Configs.USER_API_ENDPOINT + '/' + userId);
            return response;
        } catch (error) {

        }
    },
};


export default UserApi;
