import React from "react";
import "./index.scss";
import { CgShoppingCart } from "react-icons/cg";

const ProductCard = (product) => {
  const { id, name, discount, promoPrice, listPrice, image, condition } =
    product;

  return (
    <>
      <div className={"item-card-" + id}>
        <div className="card">
          <div className="card-top">
            <div className="card-top--triangle">
              <div className="card-top--triangle-condition"></div>
              <p>{condition}</p>
            </div>
            <div className="card-top--circle">
              <div className="card-top--circle-discount"></div>
              <p>{discount}%</p>
            </div>
            <figure className="card-top--img">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="card-bottom">
            <h3 className="card-bottom--name">{name}</h3>
            <div className="card-bottom--prices">
              <p className="card-bottom--prices-list">
                {new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(listPrice)}
              </p>
              <p className="card-bottom--prices-promo">
                {new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(promoPrice)}
              </p>
            </div>
            <button type="button">
              <CgShoppingCart /> COMPRAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductCard };
