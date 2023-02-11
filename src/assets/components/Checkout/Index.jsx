import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import "./index.css";
import { Pay_By_Card } from "./Pay_by_card";
import { Pay_By_Mpesa } from "./Pay_by_m_pesa";

const Checkout = () => {
  const { showCheckout, setShowCheckout } = useContext(AuthContext);
  const [showvisa, setshowvisa] = useState(true);
  const { User, setUser } = useContext(AuthContext);
  const styles = {
    backgroundColor: showvisa ? "goldenrod" : "",
    fontWeight: showvisa ? 800 : "",
  };
  const styles1 = {
    backgroundColor: showvisa ? "" : "goldenrod",
    fontWeight: showvisa ? "" : 800,
  };

  return (
    <section className="checkout-modal">
      
      <b>
      <p className="checkout-header">Checkout</p>
        {" "}
        <marquee>Remember data is not submited. App on Demo...!</marquee>
      </b>
      <fieldset>
        <legend>Delivery Details</legend>
        <p>
          User Name:<span className="grey">{User.name}</span>
        </p>
        <p>
          {" "}
          User Id:<span className="grey">{User.id}</span>
        </p>
        <p>
          {" "}
          Phone:<span className="grey">{User.phone}</span>
        </p>
        <p>
          {" "}
          Email:<span className="grey">{User.email}</span>
        </p>
        <p>
          {" "}
          Residence:<span className="grey">{User.Residence}</span>
        </p>
        <div className="checkout-method-select">
          <button
            className="mobile-money"
            onClick={() => setshowvisa(true)}
            style={styles}
          >
            Visa
          </button>
          <button
            className="visa"
            onClick={() => setshowvisa(false)}
            style={styles1}
          >
            Mobile Money
          </button>
        </div>
        <section>{showvisa ? <Pay_By_Card /> : <Pay_By_Mpesa />}</section>
      </fieldset>
    </section>
  );
};

export { Checkout };
