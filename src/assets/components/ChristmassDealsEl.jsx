import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { CartComponent } from "./CartComponent";

const ChristmassDealsEl = (props) => {
  let isExisting = false;
  let { Cart, setCart } = useContext(AuthContext);
  
  const { Added, setAdded } = useContext(AuthContext);
  let { data_from_searver, setData_from_searver } = useContext(AuthContext);

  const { showAdded, setShowAdded } = useContext(AuthContext);
  if (data_from_searver) {
    Cart = data_from_searver;
  }

  const CheckingIfItExists = (id, prodpic, title, price) => {
    const Consists = data_from_searver.some((prev) => prev.id === id);

    if (Consists) {
      console.log("its here");
      isExisting = true;
    } else {
      console.log("not here");
      isExisting = false;
    }

    if (isExisting) {
      setAdded((prev) => {
        return {
          title: "Already Here",
          price: 0,
        };
      });
    } else {
      Cart.push({
        id: id,
        title: title,
        price: price,
        prodpic: prodpic,
      });
      localStorage.setItem("Cart", JSON.stringify(Cart));

      setAdded((prev) => {
        return {
          title: title,
          price: price,
        };
      });
    }
  };

  if (data_from_searver) {
    Cart = data_from_searver;
  }

  const CartItem = (id, title, price, prodpic) => {
    CheckingIfItExists(id, prodpic, title, price);
    setShowAdded(true);
  };

  return (
    <div className="deal">
      <img src={props.prodpic} />
      {props.available === 0 && <div className="status">SOLD OUT</div>}
      <p>
        Name:<span className="grey">{props.title}</span>
      </p>
      <p>
        Quantity:<span className="grey">{props.quantity}</span>
      </p>
      <p>
        Price:<span className="grey">{props.price}</span>
      </p>

      <button
        onClick={() =>
          CartItem(props.id, props.title, props.price, props.prodpic)
        }
        className="addtocart"
      >
        Add To Cart
      </button>
    </div>
  );
};
export { ChristmassDealsEl };