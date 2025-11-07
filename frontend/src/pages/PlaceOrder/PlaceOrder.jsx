import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getCartTotal } = useContext(StoreContext);

  const subtotal = getCartTotal();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  return (
    <form className="checkout">
      <div className="checkout__details">
        <p className="checkout__title">Delivery Information</p>

        <div className="checkout__row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />

        <div className="checkout__row">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="checkout__row">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="text" placeholder="Phone" />
      </div>

      <div className="checkout__summary">
        <h2>Order Summary</h2>

        <div className="checkout__summary-block">
          <div className="checkout__summary-line">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>

          <hr />

          <div className="checkout__summary-line">
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>

          <hr />

          <div className="checkout__summary-line">
            <strong>Total</strong>
            <strong>${total}</strong>
          </div>
        </div>

        <button className="checkout__pay-btn">Proceed to payment</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
