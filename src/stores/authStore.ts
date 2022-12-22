import axios from 'axios';
import { defineStore } from 'pinia'
import router from '../router';
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const authStore = defineStore({
  id: 'authStore',
  state: () =>
  ({
    isAuthenticated : false,
    username: ""
  }),
  actions: {
    // check if already authenticated by session
    async checkIsAuthenticated() {
        let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/session/`;
        const response: Response = await axios.get(endpoint, { withCredentials: true }
        );
        const isAuthenticated = response.data.isAuthenticated
        if (isAuthenticated == false) {
          router.push('/login');
        } 
        this.isAuthenticated = true;
    },
    // get CSRF Token from Backend and store it in cookie
    async getCSRFToken() {
      let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/csrf/`;
      const response: Response = await axios.get(endpoint);
    },
    // login using username and password
    async login(username: String, password: String) {
      try {
        let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/login/`;
        const response: Response = await axios.post(endpoint,
          JSON.stringify({ username: username, password: password }), {
          withCredentials: true,
          headers: {
            "X-CSRFToken": cookies.get("csrftoken"),
            'content-type': 'application/json'
          }
        });
        router.push('/');
      } catch (e) {
        console.log(e);
      }
    },
    async logout() {
      let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/logout/`;
      const response: Response = await axios.get(endpoint, {withCredentials: true});
      router.push('/login');
    },
    async getWhoAmI() {
      let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/whoami/`;
      const response: Response = await axios.get(endpoint, {withCredentials: true});
      this.username = response.data.username;
    },
  }
});