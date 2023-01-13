import { AuthContext } from "../context";
import { useContext } from "react";


const CartComponent = () => {
  const { data_from_searver, setData_from_searver } = useContext(AuthContext);
function removefromcart(id){
console.log(id+"removed")

}
  const render = data_from_searver.map((props) => {
    return (
      <div className="cart-product">
        <div className="remove-from-cart" onClick={()=>removefromcart(props.id)}><img  src="./src/assets/images/cancel.png" /></div>
        
        <img src={props.prodpic} />
        <p>
          Name:<span className="grey">{props.title}</span>
        </p>

        <p>
          Price:<span className="grey">{props.price}</span>
        </p>
      
          
      </div>
    );
  });
  return <div className="deals">{render}</div>;
};

export { CartComponent };
