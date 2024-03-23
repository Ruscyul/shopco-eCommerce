import { useSelector } from 'react-redux';
import { useGetProductsQuery } from '../../../shared/api/apiSlice';
import { selectCartProductsId } from '../../../features/cart/cartSlice';

export const useGetCartProducts = () => {
  const cartProductsId = useSelector(selectCartProductsId);
  const { data: products, isLoading } = useGetProductsQuery();

  if (isLoading || !products) {
    return [];
  } else {
    return cartProductsId.map(({ id, count }) => {
      const product = products.filter((product) => product.id === id)[0];
      return { ...product, count };
    });
  }
};
