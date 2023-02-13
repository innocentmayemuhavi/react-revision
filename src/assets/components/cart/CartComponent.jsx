import { AuthContext } from "../../context";
import { useContext, useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./index.css";
const CartComponent = () => {
  const { Cart,setShowDialogue, setCart } =
    useContext(AuthContext);

  const removeFromCart = (id, item) => {
    const list = Cart.items.filter((prod) => prod.id !== id);
    console.log(list);
    setCart((prev) => {
      return {
        ...prev,
        items: list,
        total: list.reduce((prev, curr) => {
          return prev + curr.price;
        }, 0),
      };
    });
  };
  const render = Cart.items.map((props) => {
    return (
      <div className="deal" key={props.id}>
        <div
          className="remove-from-cart"
          onClick={() => removeFromCart(props.id, { ...props })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
          </svg>
        </div>
        <div className="deal-image">
          <img src={props.prodpic} />
        </div>
        <div className="deal-content">
          <p>
            Name:<span className="grey">{props.title}</span>
          </p>
          <p>
            Quantity:<span className="grey">{props.Quantity}</span>
          </p>
          <p>
            Price:
            <span className="grey">Ksh.{props.price * props.Quantity}</span>
          </p>
        </div>
      </div>
    );
  });
  return (
    <>
      <Header />
  
      <div>
        <p>Your Cart Has {Cart.items.length} Item(s)</p>
        <p className="d-flex justfy-content-left">Total Amount:{Cart.total}</p>
        <div className="deals">{render}</div>

        <div className="cart-btns">
          <Link to={"/"}>
            {" "}
            <button
              className="closecart"
              onClick={() => setShowDialogue(false)}
            >
              {Cart.items.length == 0 ? "Add Items" : "Close Cart"}
            </button>
          </Link>
          <Link to={"/checkout"}><button
            className="checkout-btn"
            onClick={() => setShowCheckout((prev) => !prev)}
          >Show Check-Out
          </button></Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { CartComponent };
