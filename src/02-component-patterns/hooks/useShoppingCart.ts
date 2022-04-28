import { useState } from "react";

import { Product, ProductInCart } from "../interfaces/interfaces";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((prevShoppingCart) => {
      const productInCart: ProductInCart = prevShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...prevShoppingCart,
          [product.id]: productInCart,
        };
      }

      //Borrar el producto
      const { [product.id]: toDelete, ...rest } = prevShoppingCart;
      return rest;

      // if (count > 0) {
      //   return {
      //     ...prevShoppingCart,
      //     [product.id]: { ...product, count },
      //   };
      // }
      // const { [product.id]: toDelete, ...rest } = prevShoppingCart;
      // return rest;
    });
  };

  return { shoppingCart, onProductCountChange };
};

export default useShoppingCart;
