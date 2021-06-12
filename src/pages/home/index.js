import React from "react";
import { Link } from "react-router-dom";
import { Button, Collection, Product } from "components";
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
  const products = [
    {
      id: 1,
      name: "Zweiseitiger Wendemantel Mit Schmetterlingsxzds",
      description: "+6 colors",
      price: 299,
      discount: 220,
      status: "new",
      image: require("assets/image/product-sample01.png").default,
    },
    {
      id: 2,
      name: "Écharpe tisée avec bords contrastants et franges",
      description: "",
      price: 299,
      discount: 220,
      status: null,
      image: require("assets/image/product-sample02.png").default,
    },
    {
      id: 3,
      name: "Трикотажный Супер Мягкий Плед Контрастного Оттенка",
      description: "+6 colors",
      price: 299,
      discount: 0,
      status: null,
      image: require("assets/image/product-sample03.png").default,
    },
    {
      id: 4,
      name: "Кардиган в Стиле Колор-Блок с V-Образным Воротником",
      description: "+6 colors",
      price: 299,
      discount: 220,
      status: null,
      image: require("assets/image/product-sample04.png").default,
    },
    {
      id: 5,
      name: "Zweiseitiger Wendemantel Mit Schmetterlingsxzds",
      description: "+6 colors",
      price: 299,
      discount: 220,
      status: null,
      image: require("assets/image/product-sample05.png").default,
    },
    {
      id: 6,
      name: "Écharpe tisée avec bords contrastants et franges",
      description: "",
      price: 299,
      discount: 220,
      status: null,
      image: require("assets/image/product-sample06.png").default,
    },
    {
      id: 7,
      name: "Трикотажный Супер Мягкий Плед Контрастного Оттенка",
      description: "+6 colors",
      price: 299,
      discount: 220,
      status: null,
      image: require("assets/image/product-sample07.png").default,
    },
    {
      id: 8,
      name: "Кардиган в Стиле Колор-Блок с V-Образным Воротником",
      description: "+6 colors",
      price: 299,
      discount: 220,
      status: null,
      image: require("assets/image/product-sample08.png").default,
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
      <div className="products">
        <h1>TO GET and TO GIFT </h1>
        <div className="product-wrapper">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
      <div className="about-us">
        <div className="image-wrapper">
          <img
            src={require("assets/image/about-us.png").default}
            alt="about-us"
          />
        </div>
        <div className="us">
          <div>
            <h1>ABOUT US</h1>
            <p>
              Aute et officia anim consectetur consequat velit minim irure Lorem
              ad. Officia nisi sunt est eiusmod occaecat excepteur velit
              reprehenderit occaecat cillum anim ad magna aliqua. Sint enim
              Lorem amet in tempor non ea duis cillum. Cillum consectetur in in
              aliqua. Nostrud minim duis cupidatat et ea sint. Aute et officia
              anim consectetur consequat velit minim irure Lorem ad. Officia
              nisi sunt est eiusmod occaecat excepteur velit reprehenderit
              occaecat cillum anim ad magna aliqua. Sint enim Lorem amet in
              tempor non ea duis cillum. Cillum consectetur in in aliqua.
              Nostrud minim duis cupidatat et ea sint.
            </p>
            <Link to="/about-us">
              <Button type="secondary">READ MORE</Button>
            </Link>
          </div>
          <div className="about-us-picture">
            <img
              src={require("assets/image/about-us-item.png").default}
              alt="about-us"
            />
            <img
              src={require("assets/image/about-us-item.png").default}
              alt="about-us"
            />
          </div>
        </div>
      </div>
      <div className="subscribe">
        <h1>Subscribe</h1>
        <p>
          Sign up for emails and receive early access to new arrivals, sales,
          events + more.
        </p>
        <form action="/subscribe" method="POST">
          <input type="email" placeholder="Enter your email address" />
          <Button type="secondary">Submit</Button>
          <p>
            By signing up, you will receive Gobi Cashmere offers, promotions and
            other commercial messages. You are also agreeing to Gobi Cashmere's{" "}
            <Link to="/privacy">Privacy Policy</Link>. You may unsubscribe at
            any time.
          </p>
        </form>
      </div>
    </div>
  );
};
export default Home;
