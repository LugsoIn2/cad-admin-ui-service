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
        const isAuthenticated = response.data.isAuthenticated;
        if (isAuthenticated == true) {
          router.push('/cockpit');
          this.isAuthenticated = true;
        } else {
          router.push("/start");
        }
    },
    // get CSRF Token from Backend and store it in cookie
    async getCSRFToken() {
      let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/csrf/`;
      const response: Response = await axios.get(endpoint, {withCredentials: true});
    },
    // login using username and password
    async login(email: String, password: String): boolean {
      try {
        let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/login/`;
        const response: Response = await axios.post(endpoint,
          JSON.stringify({ email: email, password: password }), {
          withCredentials: true,
          headers: {
            "X-CSRFToken": cookies.get("csrftoken"),
            'content-type': 'application/json'
          }
        });
        if (response.status == 200) {
          this.isAuthenticated = true;
          router.push('/cockpit');
          return true;
        }
      } catch (e) {
        console.log(e);
      }
      return false;
    },
    async logout() {
      let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/logout/`;
      const response: Response = await axios.get(endpoint, {withCredentials: true});
      this.isAuthenticated = false;
      router.push('/');
    },
    async getWhoAmI() {
      let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/whoami/`;
      const response: Response = await axios.get(endpoint, {withCredentials: true});
      this.username = response.data.username;
    },
    async register(email: String, password: String): Promise<Object> {
      try {
        let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/register/`;
        const response: Response = await axios.post(endpoint,
          JSON.stringify({ username: email, password1: password, password2: password }), {
          withCredentials: true,
          headers: {
            "X-CSRFToken": cookies.get("csrftoken"),
            'content-type': 'application/json'
          }
        });
        if (response.status == 200 && !response.data.error) {
          this.isAuthenticated = true;
          router.push('/cockpit');
          return null;
        } else {
          return response.data.error;
        }
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  }
});