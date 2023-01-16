import { AuthContext } from "../context";
import { useContext } from "react";
import { useEffect } from "react";
const CartComponent = () => {
  const { Cart, setCart } = useContext(AuthContext);
  const { data_from_searver, setData_from_searver } = useContext(AuthContext);
  const { showCartPage, setshowcartpage } = useContext(AuthContext);
  const  RemovingAnItem=(data_from_searver,id)=>{
    const ind=data_from_searver.findIndex((o)=>o.id===id)
    if(ind>-1){
      data_from_searver.splice(ind,1)
    }
  
    return data_from_searver
    }

  const removefromcart = (id) => {
    setData_from_searver(prev=>prev)
    RemovingAnItem(data_from_searver,id)
    
setCart(prev=>{
  return prev.map((data)=>{
    return data_from_searver
  })
})
    localStorage.setItem("Cart", JSON.stringify(data_from_searver));
  

  };


  useEffect(()=>{
console.log("Run")

setCart(prev=>{
  return prev.map((data)=>{
    return data_from_searver
  })
})
console.log(Cart)
localStorage.setItem("Cart", JSON.stringify(Cart));

  },[data_from_searver])
  const render = data_from_searver.map((props) => {
    return (
      <div className="cart-product" key={props.id}>
        <div
          className="remove-from-cart"
          onClick={() =>
            removefromcart(props.id)
           
          }
        >
          <img src="./src/assets/images/cancel.png" />
        </div>

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
  return (
    <div>
      <p>Your Cart Has {data_from_searver.length} Item(s)</p>
      <div className="deals">{render}</div>
      <button
        className="closecart"
        onClick={() => {
          setshowcartpage((prev) => !prev);
        }}
      >
        {data_from_searver.length == 0 ? "Add Items" : "Close Cart"}
      </button>
    </div>
  );
};

export { CartComponent };
