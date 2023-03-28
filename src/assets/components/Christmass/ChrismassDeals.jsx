import ProductData from "../SystemData/ProductData";
import { ChristmassDealsEl } from "./ChristmassDealsEl";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { CartComponent } from "../cart/CartComponent";

const ChristmassDeals = () => {
  const { showCartPage, SeachVal } = useContext(AuthContext);
  const filtered = ProductData.filter((fill) =>
    fill.title.toLocaleLowerCase().includes(`${SeachVal.toLocaleLowerCase()}`)
  );
  const prods = filtered.map((prod) => {
    return <ChristmassDealsEl key={prod.id} {...prod} />;
  });
  return (
    <div>
      {showCartPage ? (
        <div>
          <p>Your Cart...</p>
          <hr />
          <CartComponent />
        </div>
      ) : (
        <div>
          <p>New Year Deals...</p>
          <hr />
          <div className="deals">{prods}</div>{" "}
        </div>
      )}{" "}
    </div>
  );
};

export { ChristmassDeals };
