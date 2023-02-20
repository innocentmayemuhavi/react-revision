import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { Header } from "../Header/Header";
import "./index.css";
import { Pay_By_Card } from "./Pay_by_card";
import { Pay_By_Mpesa } from "./Pay_by_m_pesa";
import { Link } from "react-router-dom";
const Checkout = () => {
  const [showvisa, setshowvisa] = useState(true);
  const { User,Cart} = useContext(AuthContext);
  const styles = {
    backgroundColor: showvisa ? "goldenrod" : "",
    fontWeight: showvisa ? 800 : "",
  };
  const styles1 = {
    backgroundColor: showvisa ? "" : "goldenrod",
    fontWeight: showvisa ? "" : 800,
  };
  const render=Cart.items.map(prod=>{
    return<tr>
      <td><img className="summary-product-image" src={prod.prodpic}/></td>
      <td>
        {prod.title}
      </td>

      <td>
        {prod.Quantity}
      </td>
      <td>
       Ksh. {prod.price}
      </td>
      <td>
        Ksh. {prod.price*prod.Quantity}
      </td>
    </tr>
  })

  return (<>
  <Header/>
  <Link to={"/cart"}><button
            className="checkout-btn"
          >Cancel Check-Out
          </button></Link>
    
  <section className="checkout-modal">
      <b>
        <p className="checkout-header">Checkout</p>{" "}
        <marquee>Remember data is not submited. App on Demo...!</marquee>
      </b>
      <fieldset>
        <legend>Order Summary</legend>
        <table>
          <th>Image</th>
      <th>Order</th>
      <th>Qty</th>
      <th>price/unit</th>
      <th>Amount</th>
     <tbody> {render}</tbody>
    </table>
    <p>Total:.Ksh.<b>{Cart.total}</b></p>
      </fieldset>
      <fieldset className="deliverydata">
        <legend>Delivery Details</legend>
      <section className="userdata">
      <fieldset style={{
        padding:4,
        marginTop:33 ,
        marginBottom:9
      }}>
        <legend>Recipient Details And Address</legend>
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
      </fieldset>
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
      </section>
      
        <section>{showvisa ? <Pay_By_Card /> : <Pay_By_Mpesa />}</section>
      </fieldset>
    </section>
  </>
  );
};

export { Checkout };
