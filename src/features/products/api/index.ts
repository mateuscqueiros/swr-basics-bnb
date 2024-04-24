import useSWR from 'swr';
import { axiosGet } from '../../../lib/axios';

export function useProducts() {
  const { data, ...rest } = useSWR('/products', (url) => axiosGet(url));
  console.log(data);

  return {
    products: data && data.products,
    ...rest,
  };
}
