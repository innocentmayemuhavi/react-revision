

    import React from "react";
    import { useContext, useEffect, useState } from "react";
    import { AuthContext } from "../context";


const DealsEl=(props)=>{

    
      let count = 0;
      let { Cart, setCart } = useContext(AuthContext);
    
      const { Added, setAdded } = useContext(AuthContext);
      let { data_from_searver, setData_from_searver } = useContext(AuthContext);
    if(data_from_searver){
      Cart=data_from_searver
    }
      function CartItem(id, title, price,prodpic) {
        Cart.push({
          id: id,
          title: title,
          price: price,
          prodpic:prodpic
        });
        localStorage.setItem("Cart", JSON.stringify(Cart));
       
        console.log(data_from_searver);
       
      }
    
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
            onClick={() => CartItem(props.id, props.title, props.price,props.prodpic)}
            className="addtocart"
          >
            Add To Cart
          </button>
        </div>
      );
    };
  
    



export {DealsEl}