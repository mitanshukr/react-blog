import axios from "axios";

const instance = axios.create({
  baseURL: "https://immune-ink.herokuapp.com/",
});

export default instance;
