import ProductData from "./ProductData";
import { ChristmassDealsEl } from "./ChristmassDealsEl";
import { useContext, useState } from "react";
import { AuthContext } from "../context";
import { CartComponent } from "./CartComponent";
import  {ProductCard}  from "../components/productcard/index";

const Deals = () => {
  const { showCartPage, setshowcartpage } = useContext(AuthContext);
  const { SeachVal, setSearchval } = useContext(AuthContext);
  const { showProductCard,setShowProductCard} = useContext(AuthContext);
  const filtered = ProductData.filter((fill) =>
    fill.title.toLocaleLowerCase().includes(`${SeachVal}`)
  );
  const prods = filtered.map((prod) => {
    return <ChristmassDealsEl key={prod.id} {...prod} />;
  });
  return (
  <>
{showProductCard&&<ProductCard/>}
  <div>
      <p>Our Deals...</p>
      <hr />
      <div className="deals">{prods}</div>
    </div></>

  );
};

export { Deals };
