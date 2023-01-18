import React from "react";
import { useContext,useEffect } from "react";
import { AuthContext } from "../context";

const ProductCard = (id, prodpic, title, price) => {
  const { productCard, setProductCard } = useContext(AuthContext);

  useEffect(()=>{
    console.log(productCard)
  },[productCard])




  function handleChange(event) {
   
    const {name,type,checked,value}=event.target
    setProductCard((prevState) => {
      return { ...prevState, [name]:value };
    });
    
  }
  return (
    <div className="productCard">
      Product Card
      <img src="./src/assets/images/kabraaas.jpeg" />
      <p>
        Title:<span className="grey">{productCard.title}</span>
      </p>
      <p>
        Title:<span className="grey">{productCard.price}</span>
      </p>
      <p>
        Quantity:
        <span className="grey">
          <select value={productCard.Quantity} name="Quantity" onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </span>
      </p>
      <button>Done</button>
    </div>
  );
};

export { ProductCard };
