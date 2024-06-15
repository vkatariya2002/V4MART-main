import React, { useContext, useEffect, useState } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

const CartItems = () => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");
  const [promo, setPromo] = useState(false);
  const { products } = useContext(ShopContext);
  const stripeKey = "pk_test_VvWjqy13EI2MSDgDxy3b5jbx00KrrL41yi";
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const [orderId, setOrderId] = useState("");

  const handleRemoveToCart = (productId) => {
    removeFromCart(productId.id);
    toast.success(`Removed ${productId.name} from cart successfully!`);
  };

  useEffect(() => {
    setAmount(getTotalCartAmount() * 100); // Convert to cents
  }, [cartItems]);

  const onToken = (token) => {
    console.log(token);
    alert("Your Payment has been processed");
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "https://v4mart-backend.onrender.com/create-upi-payment",
        {
          amount: amount / 100, // Convert back to main currency unit (dollars)
          currency: "INR",
        }
      );
      setOrderId(response.data.orderId);
    } catch (error) {
      console.error("Error creating UPI payment:", error);
      setError("An error occurred while creating UPI payment");
    }
  };

  return orderId ? (
    <div>
      {orderId && <p>Order ID: {orderId}</p>}
      {error && <p>{error}</p>}
    </div>
  ) : (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format-main cartitems-format">
                <img className="cartitems-product-icon" src={e.image} alt="" />
                <p className="cartitems-product-title">{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  onClick={() => handleRemoveToCart(e)}
                  className="cartitems-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <StripeCheckout
            name="Book Checkout"
            description="Please fill in the details below"
            amount={amount}
            currency="INR"
            stripeKey={stripeKey}
            token={onToken}
            billingAddress
          >
            <button className="button-primary">Proceed to Checkout</button>
          </StripeCheckout>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" onChange={() => setPromo(false)} />
            <button onClick={() => setPromo(true)}>Submit</button>
          </div>
          {promo && (
            <p className="text-danger">You are not eligible for this code.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
