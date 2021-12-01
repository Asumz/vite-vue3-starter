import axios from '@/utils/axios';

enum Api {
    GetUser = '/getuser',
}

export const getUser = () => {
    return axios.post(Api.GetUser, {}, {});
};
