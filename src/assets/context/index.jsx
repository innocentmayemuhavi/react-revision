import { createContext, useState } from "react";

const AuthContext = createContext({
  SeachVal: "",
  setSearchval: () => {},
  Cart: [],
  setCart: () => {},
  Added: {},
  setAdded: () => {},
  data_from_searver: JSON.parse(localStorage.getItem("Cart")),
  setData_from_searver: () => {},
  showCartPage: false,
  setshowcartpage: () => {},
  isLoggedin: false,
  setLoggedin: () => {},
  showAccount: true,
  setShowAccount: () => {},
  showAdded: false,
  setShowAdded: () => {},
  isExisting: false,
  setisExisting: () => {},
  productCard: {
    prodpic: "picture",
    title: "Product",
    price: 30,
    Quantity: 2,
  },
  setProductCard: () => {},
});

const AuthProvider = ({ children }) => {
  const [SeachVal, setSearchval] = useState("");
  const [Cart, setCart] = useState([]);
  const [data_from_searver, setData_from_searver] = useState(
    JSON.parse(localStorage.getItem("Cart"))
  );
  const [Added, setAdded] = useState({});
  const [showCartPage, setshowcartpage] = useState(false);
  const [isLoggedin, setLoggedin] = useState(false);
  const [showAccount, setShowAccount] = useState(true);
  const [showAdded, setShowAdded] = useState(false);
  const [isExisting, setisExisting] = useState(false);
  const [productCard, setProductCard] = useState({
    prodpic: "picture",
    title: "Product",
    price: 30,
    Quantity: 2,
  });

  return (
    <AuthContext.Provider
      value={{
        SeachVal,
        setSearchval,
        Added,
        setAdded,
        Cart,
        setCart,
        data_from_searver,
        setData_from_searver,
        showCartPage,
        setshowcartpage,
        isLoggedin,
        setLoggedin,
        showAccount,
        setShowAccount,
        showAdded,
        setShowAdded,
        isExisting,
        setisExisting,
        productCard,
        setProductCard,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
