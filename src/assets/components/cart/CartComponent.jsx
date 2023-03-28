import { AuthContext } from "../../context";
import { useContext, useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./index.css";
const CartComponent = () => {
  const { Cart, setShowDialogue, setCart } = useContext(AuthContext);

  const UpdateDataBase = () => {
    setCart((prev) => {
      return {
        ...prev,

        total: prev.items.reduce((prev, curr) => {
          return prev + curr.price * curr.Quantity;
        }, 0),
      };
    });
  };

  const removeFromCart = (id, item) => {
    const list = Cart.items.filter((prod) => prod.id !== id);
    console.log(list);
    setCart((prev) => {
      return {
        ...prev,
        items: list,
        total: list.reduce((prev, curr) => {
          return prev + curr.price * curr.Quantity;
        }, 0),
      };
    });
  };
  const Add = (id) => {
    console.log(id);

    setCart((prev) => {
      return {
        ...prev,
        items: prev.items.map((data) => {
          return data.id === id
            ? {
                ...data,
                Quantity: data.Quantity * 1 + 1,
              }
            : data;
        }),
        total: prev.items.reduce((prev, curr) => {
          return prev + curr.price * curr.Quantity;
        }, 0),
      };
    });

    UpdateDataBase();
  };
  const Minus = (id) => {
    console.log(id);

    const fill = Cart.items.filter((data) => data.id === id);
    if (fill[0].Quantity > 1) {
      setCart((prev) => {
        return {
          ...prev,
          items: prev.items.map((data) => {
            return data.id === id
              ? {
                  ...data,
                  Quantity: data.Quantity * 1 - 1,
                }
              : data;
          }),
          total: prev.items.reduce((prev, curr) => {
            return prev + curr.price * curr.Quantity;
          }, 0),
        };
      });
    }
    UpdateDataBase();
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
          <p className="quantity">
            Quantity:
            <span className="grey">
              <button
                className={props.Quantity>1?"quantity-control":"quantity-control inactive"}
                onClick={() => Minus(props.id)}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path d="M2 7.75A.75.75 0 0 1 2.75 7h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 2 7.75Z"></path>
                </svg>
              </button>
              {props.Quantity}
            </span>
            <button className="quantity-control" onClick={() => Add(props.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                className="sf"
              >
                <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
              </svg>
            </button>
          </p>
          <p>
            Price:
            <span className="grey">Ksh.{Math.round(props.price * props.Quantity).toLocaleString()}</span>
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
        <p className="d-flex justfy-content-left">Total Amount:{Cart.total.toLocaleString()}</p>
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
          <Link to={"/checkout"}>
            <button
              className="checkout-btn"
              onClick={() => setShowCheckout((prev) => !prev)}
            >
              Show Check-Out
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { CartComponent };
