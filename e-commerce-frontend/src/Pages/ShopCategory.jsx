import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => {
    fetch("https://v4mart-backend.onrender.com/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const sortByPriceASC = () => {
    const sortedProducts = [...allproducts].sort((a, b) => a.new_price - b.new_price);
    setAllProducts(() => sortedProducts);
  };

  const sortByPriceDASC = () => {
    const sortedProducts = [...allproducts].sort((a, b) =>  b.new_price - a.new_price);
    setAllProducts(() => sortedProducts);
  };

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 - 12</span> out of {allproducts.length} Products
        </p>
        {/* <div className="shopcategory-sort">Sort by  <img src={dropdown_icon} alt="" /></div> */}
        <div class="dropdown">
          <button
            class="btn dropdown-toggle border"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort By
          </button>
          <ul class="dropdown-menu">
            <li>
              <button class="dropdown-item" onClick={sortByPriceASC}>
                Price Lowest to Highest
              </button>
            </li>
            <li>
              <button class="dropdown-item" onClick={sortByPriceDASC}>
                Price Highest to Lowest 
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="shopcategory-products">
        {allproducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                id={item.id}
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        <Link to="/" style={{ textDecoration: "none" }}>
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default ShopCategory;
