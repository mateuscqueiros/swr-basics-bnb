import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { axiosDelete, axiosGet, axiosPost, axiosPut } from '../../../lib/axios';

export function useProducts() {
  const { data, ...rest } = useSWR('/products', (url) => axiosGet(url));
  console.log(data);

  return {
    products: data && data.products,
    ...rest,
  };
}

export function useCreateProduct() {
  const { trigger, ...rest } = useSWRMutation('/products', (_, data) =>
    axiosPost('/products/add', data.arg)
  );

  return {
    createProduct: trigger,
    ...rest,
  };
}

export function useUpdateProduct(id: number) {
  const { trigger, ...rest } = useSWRMutation('/products', (_, data) =>
    axiosPut(`/product/${id}`, data.arg)
  );

  return {
    updateProduct: trigger,
    ...rest,
  };
}

export function useDeleteProduct(id: number) {
  const { trigger, ...rest } = useSWRMutation('/products', () =>
    axiosDelete(`/product/${id}`)
  );

  return {
    deleteProduct: trigger,
    ...rest,
  };
}
