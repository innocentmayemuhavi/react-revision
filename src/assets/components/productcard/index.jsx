import React from "react";
import { useContext, useEffect } from "react";
import { AuthContext, AuthProvider } from "../../context";
import "./index.css";
const ProductCard = (id, prodpic, title, price) => {
  const {
    productCard,
    setProductCard,
    setShowProductCard,
    setdialogData,
    setShowDialogue,
    Cart,
    setCart,
  } = useContext(AuthContext);
  useEffect(() => {
    console.log(productCard);
  }, [productCard]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductCard((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log(productCard);
  };

  const UpdateDataBase = () => {
    setCart((prev) => {
      return {
        ...prev,

        total: prev.items.reduce((prev, curr) => {
          return prev + curr.price * curr.Quantity;
        }, 0),
      };
    });
  };
 

  const addToCart = (item) => {
    const isExisting = Cart.items.find((product) => product.id === item.id);
    if (isExisting) {
      setShowProductCard(true);
      setShowProductCard(false);
      setShowDialogue(true);
      
      setCart((prev) => {
        return {
          ...prev,
          items: prev.items.map(data=>{
            return data.id===item.id?{
              ...data,
              Quantity:productCard.Quantity
            }:data
          }),
          total: prev.items.reduce((previous, curr) => {
            return previous + curr.price * curr.Quantity;
          }, 0),
        };
      });
      UpdateDataBase()
      setdialogData({
        Message: "You have Updated your order Successfully...",
        title: item.title,
        Quantity: item.Quantity * 1,
        price: item.price * 1,
      });
      setShowProductCard(false);
    } else {
      setShowDialogue(true);
      setShowProductCard(false);
      const currentItems = Cart.items;
      currentItems.push(item);
      setCart((prev) => {
        return {
          ...prev,
          items: currentItems,
          total: currentItems.reduce((prev, curr) => {
            return prev + curr.price * curr.Quantity;
          }, 0),
        };
      });
      setdialogData({
        Message: "You have Placed your order Successfully...",
        title: item.title,
        Quantity: item.Quantity * 1,
        price: item.price * 1,
      });
    }
  };

  return (
    <AuthProvider>
      <section className="product-card">
        <div className="product-card-content">
          <div className="productcard-header">
            <p>Product Card</p>
            <div
              className="product-card-close"
              onClick={() => {
                setShowProductCard(false);
              }}
            >
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
          <p>{productCard.Message}</p>
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
                <option value={""}>Select Quantity</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </span>
          </p>
          <button onClick={() => addToCart(productCard)}>Done</button>
        </div>
      </section>
    </AuthProvider>
  );
};

export { ProductCard };
