import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const Products = (props) => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => {
    fetch("https://v4mart-backend.onrender.com/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="shopcategory">
      <img src={props.banner[0]} className="shopcategory-banner" alt="" />
      <div className="shopcategory-products">
        {allproducts.map((item, i) => {
          if (props.category[0] === item.category) {
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
      {/* <div className="shopcategory-loadmore">
        <Link to="/" style={{ textDecoration: "none" }}>
          Explore More
        </Link>
      </div> */}
      <img src={props.banner[1]} className="shopcategory-banner" alt="" />
      
      <div className="shopcategory-products">
        {allproducts.map((item, i) => {
          if (props.category[1] === item.category) {
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
      {/* <div className="shopcategory-loadmore">
        <Link to="/" style={{ textDecoration: "none" }}>
          Explore More
        </Link>
      </div> */}
      <img src={props.banner[2]} className="shopcategory-banner" alt="" />
      <div className="shopcategory-products">
        {allproducts.map((item, i) => {
          if (props.category[2] === item.category) {
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
      {/* <div className="shopcategory-loadmore">
        <Link to="/" style={{ textDecoration: "none" }}>
          Explore More
        </Link>
      </div> */}
    </div>
  );
};

export default Products;
