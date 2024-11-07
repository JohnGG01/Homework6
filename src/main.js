// main.js
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import store from './store/index'; // Import the store

const app = createApp(App);

// Set up a default base URL for Axios
axios.defaults.baseURL = 'http://localhost:3000';
app.config.globalProperties.$axios = axios; // Make axios available globally

app.use(store); // Add the store to the app
app.mount('#app');