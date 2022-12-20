
import React from 'react';




export default function ChristmassDealsEl(props) {



function Cart(id,title,price){
   console.log(id,title,price)
   alert(`You have added ${title} to your Cart...This will Add Kes.${price} to your Cart expence`)

 
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
  
      <button onClick={()=>Cart(props.id,props.title,props.price)} className="addtocart">Add To Cart</button>
     
     
    </div>
  );
}
