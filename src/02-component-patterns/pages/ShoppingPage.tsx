import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import useShoppingCart from "../hooks/useShoppingCart";

import "../styles/custom-styles.css";

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={(event) => onProductCountChange(event)}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-card">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            style={{
              width: "100px",
            }}
            key={key}
            value={product.count}
            onChange={(event) => onProductCountChange(event)}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
