import React from "react";
import { Link } from "react-router-dom";
import { Button, Collection } from "components";
import "./style.scss";
const Home = () => {
  const collections = [
    {
      id: 1,
      title: "Women",
      items: [
        {
          id: 1,
          name: "Cardigans",
          image: require("assets/image/collections-women-1.png").default,
        },
        {
          id: 2,
          name: "Cardigans",
          image: require("assets/image/collections-women-2.png").default,
        },
        {
          id: 3,
          name: "Cardigans",
          image: require("assets/image/collections-women-1.png").default,
        },
      ],
    },
    {
      id: 2,
      title: "MEN",
      items: [
        {
          id: 1,
          name: "Cardigans",
          image: require("assets/image/collections-men-1.png").default,
        },
        {
          id: 2,
          name: "Cardigans",
          image: require("assets/image/collections-men-2.png").default,
        },
        {
          id: 3,
          name: "Cardigans",
          image: require("assets/image/collections-men-1.png").default,
        },
      ],
    },
  ];
  return (
    <div className="home">
      <div className="group-1">
        <div className="group-row"></div>
        <div className="group-row">
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
      <div className="group-2">
        <div className="group-row">
          <div className="group-2-wrapper">
            <h1>WINTER SPICE 2020</h1>
            <p>Infusion of summer pieces and cashmere silk blends.</p>
            <Link to="/shop">
              <Button type="secondary">Shop now</Button>
            </Link>
          </div>
        </div>
        <div className="group-row">
          <img
            src={require("assets/image/group-2.png").default}
            alt="group-2"
          />
        </div>
      </div>
      {collections.map((collection) => (
        <Collection key={collection.id} {...collection} />
      ))}
    </div>
  );
};
export default Home;
