import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, foodList, removeFromCart, getCartTotal } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  return (
    <section className="cart">
      <div className="cart__items">
        <div className="cart__header">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {foodList.map((item) => {
          const quantity = cartItems[item._id] || 0;
          if (quantity === 0) return null;

          return (
            <div key={item._id} className="cart__row">
              <div className="cart__item">
                <img src={item.image} alt={item.name} className="cart__item-image" />
                <p className="cart__item-name">{item.name}</p>
                <p className="cart__item-price">${item.price}</p>
                <p className="cart__item-qty">{quantity}</p>
                <p className="cart__item-total">${item.price * quantity}</p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="cart__remove-btn"
                >
                  ×
                </button>
              </div>
              <hr />
            </div>
          );
        })}
      </div>

      <div className="cart__bottom">
        <div className="cart__summary">
          <h2>Order Summary</h2>

          <div className="cart__summary-row">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <hr />

          <div className="cart__summary-row">
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>
          <hr />

          <div className="cart__summary-row">
            <strong>Total</strong>
            <strong>${total}</strong>
          </div>

          <button className="cart__checkout-btn" onClick={() => navigate("/order")}>
            Proceed to checkout
          </button>
        </div>

        <div className="cart__promo">
          <p>If you have a promo code, enter it below:</p>

          <div className="cart__promo-input">
            <input type="text" placeholder="Promo code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
