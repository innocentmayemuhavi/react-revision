import ProductData from "../SystemData/ProductData";
import { ChristmassDealsEl } from "../Christmass/ChristmassDealsEl";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import  {ProductCard}  from "../productcard/index";
import { Dialog } from "../Dialogue";

const Deals = () => {
  const { showDialogue, setShowDialogue} = useContext(AuthContext);
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
  {showDialogue&&<Dialog/>}
{showProductCard&&<ProductCard/>}
  <div>
      <p>Our Deals...</p>
      <hr />
      <div className="deals">{prods}</div>
    </div></>

  );
};

export { Deals };
