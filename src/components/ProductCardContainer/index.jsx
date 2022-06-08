import React from "react";
import "./index.scss";
import { ProductCard } from "../ProductCard";
import { products } from "../../data";

const ProductCardContainer = () => {
  return (
    <>
      <section>
        <div>
          {products.map((product) => {
            return (
              <ProductCard
                id={product.id}
                name={product.name}
                discount={product.discount}
                promoPrice={product.promoPrice}
                listPrice={product.listPrice}
                image={product.image}
                condition={product.condition}
                key={product.id}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export { ProductCardContainer };
