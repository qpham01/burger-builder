import axios from "axios";

const instance = axios.create({
  baseURL: "https://burber-builder-qp.firebaseio.com"
});

export default instance;
