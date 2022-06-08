import React from "react";
import "./index.scss";
import { CgShoppingCart } from "react-icons/cg";

const ProductCard = (product) => {
  const { id, name, discount, promoPrice, listPrice, image, condition } =
    product;
  return (
    <>
      <div className="card container">
        <div>
          <div className="card-condition">{condition}</div>
          <div className="card-discount">{discount}</div>
          <figure className="card-img">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div>
          <h3 className="card-name">{name}</h3>
          <div className="card-prices">
            <p className="card-prices--list"></p>
            <p className="card-prices--promo"></p>
          </div>
          <button type="button">
            <CgShoppingCart />
            COMPRAR
          </button>
        </div>
      </div>
    </>
  );
};

export { ProductCard };
