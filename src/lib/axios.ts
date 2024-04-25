import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  params: {
    delay: 1000,
  },
});

export function axiosGet(url: string) {
  return axios.get(url).then((response) => response.data);
}

export function axiosPost(url: string, data?: any, params?: any) {
  return axios.post(url, data, params).then((response) => response.data);
}

export function axiosPut(url: string, data?: any, params?: any) {
  return axios.put(url, data, params).then((response) => response.data);
}

export function axiosDelete(url: string) {
  return axios.delete(url).then((response) => response.data);
}
