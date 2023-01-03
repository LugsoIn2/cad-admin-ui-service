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
    username: "",
    myTenant: null
  }),
  actions: {
    // check if already authenticated by session
    async checkIsAuthenticated() {
        const endpoint = `${import.meta.env.VITE_API_ENDPOINT}/session/`;
        const response: any = await axios.get(endpoint, { withCredentials: true });
        const isAuthenticated = response.data.isAuthenticated;
        if (isAuthenticated == true) {
          this.isAuthenticated = true;
          const tenantEndpoint = `${import.meta.env.VITE_API_ENDPOINT}/mytenant/`;
          const tenantResponse: any = await axios.get(tenantEndpoint, { withCredentials: true });
          this.myTenant = tenantResponse.data == '' ? null : tenantResponse.data;
        }
    },
    // get CSRF Token from Backend and store it in cookie
    async getCSRFToken() {
      let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/csrf/`;
      const response: Response = await axios.get(endpoint, {withCredentials: true});
    },
    // login using username and password
    async login(email: String, password: String): Promise<boolean> {
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
          router.push('/dashboard');
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
      const response: any = await axios.get(endpoint, {withCredentials: true});
      this.username = response.data.username;
    },
    async register(email: String, password: String): Promise<Object> {
      try {
        let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/register/`;
        const response: any = await axios.post(endpoint,
          JSON.stringify({ username: email, password1: password, password2: password }), {
          withCredentials: true,
          headers: {
            "X-CSRFToken": cookies.get("csrftoken"),
            'content-type': 'application/json'
          }
        });
        if (response.status == 200 && !response.data.error) {
          this.isAuthenticated = true;
          router.push('/dashboard');
          return {};
        } else {
          return response.data.error;
        }
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  }
});