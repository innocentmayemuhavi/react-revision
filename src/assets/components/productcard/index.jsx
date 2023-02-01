import React from "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context";

const ProductCard = (id, prodpic, title, price) => {
  const { productCard, setProductCard } = useContext(AuthContext);
  const { showProductCard,setShowProductCard} = useContext(AuthContext);
  let { Cart, setCart } = useContext(AuthContext);
  let { data_from_searver, setData_from_searver } = useContext(AuthContext);
  let isExisting = false;
  useEffect(() => {
    console.log(productCard);
  }, [productCard]);

  const handleChange=(event)=>{
    const { name, value } = event.target;
    setProductCard((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log(productCard)
  }
  if (data_from_searver) {
    Cart = data_from_searver;
  }
  

  const Tocart=()=>{
    if (data_from_searver) {
        Cart = data_from_searver;
      }
    
    const Consists = data_from_searver.some((prev) => prev.id === productCard.id);

    if (Consists) {
  
      isExisting = true;
    } else {
     
      isExisting = false;
    }

    if (isExisting) {
      setShowProductCard(false)
    }
     else {

     Cart.push({
        id:productCard.id,
        prodpic:productCard.prodpic,
        title:productCard.title,
        price:productCard.price,
        Quantity:productCard.Quantity
     })
     localStorage.setItem("Cart",JSON.stringify(Cart))
     setData_from_searver(prev=>prev)
     setCart(prev=>{
       return prev.map((data)=>{
         return data_from_searver
       })
     })
    }
   
  }
 
  return (
    <section className="product-card">
      <div className="product-card-content">
        <div className="productcard-header">
          <p>Product Card</p>
          <div className="product-card-close" onClick={()=>{
            setShowProductCard(false)
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
            </svg>
          </div>
        </div>
        <img src={productCard.prodpic} className="product-card-picture" />
        <p>
          Title:<span className="grey">{productCard.title}</span>
        </p>
        <p>
          Price:<span className="grey">{productCard.price}</span>
        </p>
        <p>
          Quantity:
          <span className="grey">
            <select
              value={productCard.Quantity}
              name="Quantity"
              onChange={handleChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </span>
        </p>
        <button onClick={Tocart} >Done</button>
      </div>
    </section>
  );
};

export { ProductCard };
