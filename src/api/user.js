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


    getUser: async function (userId) {
        try {
            const response = await axios.get(Configs.API_URL + Configs.USER_API_ENDPOINT + '/' + userId);
            const user = response.data;
            return user;
        } catch (error) {

        }
    },


    createUser: async function (user) {
        try {
            const response = await axios.post(Configs.API_URL + Configs.USER_API_ENDPOINT, user);
            return response;
        } catch (error) {

        }
    },


    updateUser: async function (userId, user) {
        try {
            const response = await axios.put(Configs.API_URL + Configs.USER_API_ENDPOINT + '/' + userId, user);
            return response;
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
