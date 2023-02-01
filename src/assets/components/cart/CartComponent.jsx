import { AuthContext } from "../../context";
import { useContext } from "react";
import { useEffect } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
const CartComponent = () => {
  const { Cart, setCart } = useContext(AuthContext);
  const { data_from_searver, setData_from_searver } = useContext(AuthContext);
  const { showDialogue, setShowDialogue } = useContext(AuthContext);

  localStorage.setItem("Cart", JSON.stringify({}));

  localStorage.setItem("Cart", JSON.stringify(data_from_searver));
  setData_from_searver((prev) => prev);
  const RemovingAnItem = (data_from_searver, id) => {
    const index = data_from_searver.findIndex((o) => o.id === id);
    if (index > -1) {
      data_from_searver.splice(index, 1);
    }
    return data_from_searver;
  };
  const removefromcart = (id) => {
    setData_from_searver((prev) => prev);
    RemovingAnItem(data_from_searver, id);
    setData_from_searver((prev) => prev);
    setCart((prev) => {
      return prev.map((data) => {
        return data_from_searver;
      });
    });

    localStorage.setItem("Cart", JSON.stringify(data_from_searver));
    setData_from_searver((prev) => prev);
  };

  useEffect(() => {
    console.log("Run");

    localStorage.setItem("Cart", JSON.stringify(data_from_searver));
  }, [data_from_searver]);
  const render = data_from_searver.map((props) => {
    return (
      <div className="cart-product" key={props.id}>
        <div
          className="remove-from-cart"
          onClick={() => removefromcart(props.id)}
        >
          <img src="./images/cancel.png" />
        </div>

        <img src={props.prodpic} />
        <p>
          Name:<span className="grey">{props.title}</span>
        </p>
        <p>
          Quantity:<span className="grey">{props.Quantity}</span>
        </p>
        <p>
          Price:<span className="grey">Ksh.{props.price * props.Quantity}</span>
        </p>
      </div>
    );
  });
  return (
    <>
      <Header />
      <div>
        <p>Your Cart Has {data_from_searver.length} Item(s)</p>
        <div className="deals">{render}</div>
        <div className="cart-btns">
          <Link to={"/"}>
            {" "}
            <button
              className="closecart"
              onClick={() => setShowDialogue(false)}
            >
              {data_from_searver.length == 0 ? "Add Items" : "Close Cart"}
            </button>
          </Link>
          <button className="checkout-btn">Check-Out</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { CartComponent };
