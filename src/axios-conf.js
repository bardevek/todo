import axios from "axios";

const instance = axios.create({
    baseURL: "https://todo-list-61845.firebaseio.com/"
});

export default instance;