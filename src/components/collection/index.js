import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Collection = (props) => {
  const { title, items } = props;
  return (
    <div className="collection">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={item.id}>
            {index === 1 && <h1 className="item-title">{title}</h1>}
            <Link to={"/collection/" + item.id}>
              <img src={item.image} alt="collection" />
              <div className="item-name">
                <span>{item.name}</span>
                <img
                  src={require("assets/logo/collection-arrow.svg").default}
                  alt="arrow"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Collection;
