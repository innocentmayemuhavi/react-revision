import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import "./index.css";
const Dialog = () => {
  const { dialogData, setShowDialogue } = useContext(AuthContext);
  return (
    <section className="dialog-overlay">
      <section className="dialog-content">
        <div className="dialog-header">
          <p>Dialog Header</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            onClick={() => setShowDialogue(false)}
          >
            <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
          </svg>
        </div>
        <hr />
        <p>{dialogData.Message}</p>
        <p>Order Details</p>
        <fieldset>
          <legend>Product Details...</legend>
          <p>
            Title:<span className="grey"> {dialogData.title}</span>
          </p>
          <p>
            Quanty:<span className="grey">{dialogData.Quantity}</span>
          </p>
          <p>
            Price:
            <span className="grey">
              Ksh.{dialogData.Quantity * dialogData.price}
            </span>
          </p>
        </fieldset>
        <div className="dialog-buttons">
          <button onClick={() => setShowDialogue(false)}>Cancel</button>
          <Link to={"/cart"}>
            <button className="view-cart">View Cart</button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export { Dialog };
