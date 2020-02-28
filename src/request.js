import axios from "axios";
import { store } from "./routes/Root";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`
});

instance.interceptors.request.use(config => {
  return config;
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Do something with response data
    if (
      error &&
      error.response &&
      error.response.status &&
      401 === error.response.status
    ) {
      store.dispatch({
        type: "SIGN_OUT"
      });
    }
    return Promise.reject(error);
  }
);

export default instance;
