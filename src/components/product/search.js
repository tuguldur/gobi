import React from "react";
import { Link } from "react-router-dom";
const SearchProduct = (props) => {
  const { name, image, price, discount, id } = props;
  return (
    <div className="product-sm">
      <img className="product-image" src={image} alt={name} />
      <div className="product-body">
        <Link to={`/product/${id}`}>
          <span className="name">{name}</span>
        </Link>
        <div className={`price-wrapper${discount > 0 ? " has-discount" : ""}`}>
          <span className="price">${price}</span>
          {discount > 0 && (
            <span className="discount">${price - discount}</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchProduct;
