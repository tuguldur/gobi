import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components";
import "./style.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="group-1">
        <div className="group-bar"></div>
        <div className="group-bar">
          <div className="sale-wrapper">
            <img
              src={require("assets/image/group-sale.png").default}
              className="big"
              alt="sale"
            />
            <img
              src={require("assets/image/sale-dark.png").default}
              className="small"
              alt="sale"
            />
            <Link to="/shop">
              <Button className="sale-button">Shop now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
