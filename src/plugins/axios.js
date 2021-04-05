import axios from 'axios';
import Vue from 'vue';
import store from '../store/index';

const devInstance = createInstance('http://localhost:8080');
const productionInstance = createInstance('http://localhost: 8080');

function createInstance(url) {
  return axios.create({
    baseUrl: url,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export default {
  install() {
    Vue.prototype.$axios = devInstance;
    store.$axios = devInstance;
  },
};
