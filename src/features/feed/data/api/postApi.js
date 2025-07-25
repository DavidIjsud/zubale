const { default: axios } = require("axios");

const BASE_URL = "https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts";


const postApi = {
    fetchPosts: async () => {
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
    }
}

export default postApi;