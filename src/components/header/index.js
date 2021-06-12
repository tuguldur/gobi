import React, { useState } from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { SearchProduct } from "components";
const Header = () => {
  const [search, setSearch] = useState("");
  const items = [
    {
      id: 1,
      name: "Chill Summer Essential Set",
      price: 899,
      discount: 278,
      image: require("assets/image/product-search.png").default,
    },
    {
      id: 2,
      name: "Chill Summer Essential Set",
      price: 899,
      discount: 278,
      image: require("assets/image/product-search.png").default,
    },
    {
      id: 3,
      name: "Chill Summer Essential Set",
      price: 899,
      discount: 278,
      image: require("assets/image/product-search.png").default,
    },
    {
      id: 4,
      name: "Chill Summer Essential Set",
      price: 899,
      discount: 0,
      image: require("assets/image/product-search.png").default,
    },
  ];
  const categories = [
    { id: 1, name: "Sweater", slug: "sweater" },
    { id: 2, name: "Basic", slug: "" },
    { id: 3, name: "Cardigans", slug: "" },
    { id: 4, name: "Hoodies", slug: "hoodies" },
    { id: 5, name: "Crew Necks", slug: "" },
    { id: 6, name: "Turtle Necks", slug: "" },
    { id: 7, name: "V Necks", slug: "vnecks" },
    { id: 8, name: "Vests & Tops", slug: "" },
  ];
  return (
    <div className="header">
      <div className="header-mini">
        <div className="header-mini-wrapper">
          <div className="menu-left">
            <NavLink to="/lang">
              <img
                src={require("assets/logo/global.svg").default}
                alt="global-logo"
              />
              <span>Global - English</span>
            </NavLink>
          </div>
          <div className="menu-center">
            <span>RETURNING AN ORDER?</span>
            <NavLink to="/return">Click for more info</NavLink>
          </div>
          <div className="menu-right">
            <NavLink to="/signin">Sign in</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="mobile-actions">
          <button className="icon-button" onClick={() => setSearch("")}>
            <img
              src={require("assets/logo/menu-nav.svg").default}
              alt="drawer"
            ></img>
          </button>
          <button className="icon-button" onClick={() => setSearch("")}>
            <img
              src={require("assets/logo/search-mobile.svg").default}
              alt="search"
            ></img>
          </button>
        </div>
        <div className="nav-links">
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/men" className="active">
            Men
          </NavLink>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/accessories">Accessories</NavLink>
          <NavLink to="/organic">Organic</NavLink>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={require("assets/logo/gobi.svg").default} alt="logo"></img>
          </Link>
        </div>
        <div className="nav-actions">
          <div className="search">
            <img
              src={require("assets/logo/search-nav.svg").default}
              alt="search logo"
              className="search-logo"
            ></img>
            <div className={`search-input ${search ? "has_drop" : ""}`}>
              <input
                placeholder="Search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <>
                  <button className="icon-button" onClick={() => setSearch("")}>
                    <img
                      src={require("assets/logo/search-cancel.svg").default}
                      alt="search cancel"
                    ></img>
                  </button>

                  <div className="search-drop">
                    <div className="drop-header">
                      Press <b>enter</b> to select, <b>⇅</b> to navigate,{" "}
                      <b>esc</b> to dismiss
                    </div>
                    <div className="drop-body">
                      <div className="items">
                        {items.map((item) => (
                          <SearchProduct key={item.id} {...item} />
                        ))}
                        <div className="drop-footer">
                          <Link to="/products">
                            <span>
                              View all <b>(234)</b>
                            </span>
                            <img
                              src={
                                require("assets/logo/arrow-right.svg").default
                              }
                              alt="arrow"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="category">
                        {categories.map((category) => (
                          <div className="category-item" key={category.id}>
                            <Link
                              to={`/category/${category.slug || category.id}`}
                            >
                              {category.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="nav-buttons">
            <Link to="/favourite">
              <img
                src={require("assets/logo/heart.svg").default}
                alt="heart"
              ></img>
            </Link>
            <Link to="/card">
              <img
                src={require("assets/logo/card.svg").default}
                alt="card"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
