import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Product = (props) => {
  const { name, price, discount, status, image, description, id } = props;
  /*
name
price
discount
color
colors active [array]
status
    */
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
        <div className="product-overlay">
          {status && <div className="status">{status}</div>}
        </div>
      </div>
      <div className="product-body">
        <Link to={`/product/` + id}>
          <span className="name">{name}</span>
        </Link>
        <span className="description">{description}</span>
        <div className={`price${discount > 0 ? " has-discount" : ""}`}>
          <span className="amount">${price}</span>
          {discount > 0 && <span className="discount">${discount}</span>}
        </div>
      </div>
    </div>
  );
};
export default Product;
