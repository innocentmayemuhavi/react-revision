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
  isLoggedin: false,
  setLoggedin: () => {},
  showAccount: false,
  setShowAccount: () => {},
  showDialogue: false,
  setShowDialogue: () => {},
  isExisting: false,
  setisExisting: () => {},
  productCard: {},
  setProductCard: () => {},
  showProductCard:false,
  setShowProductCard:()=>{},
  dialogData:{},
  setdialogData:()=>{}
});

const AuthProvider = ({ children }) => {
  const [SeachVal, setSearchval] = useState("");
  const [Cart, setCart] = useState([]);
  const [data_from_searver, setData_from_searver] = useState(
    JSON.parse(localStorage.getItem("Cart"))
  );
  const [Added, setAdded] = useState({});

  const [isLoggedin, setLoggedin] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);
  const [isExisting, setisExisting] = useState(false);
  const [productCard, setProductCard] = useState({});
  const[showProductCard,setShowProductCard]=useState(false)
  const[dialogData,setdialogData]=useState({})
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
        isLoggedin,
        setLoggedin,
        showAccount,
        setShowAccount,
        isExisting,
        setisExisting,
        productCard,
        setProductCard,
        showProductCard,
        setShowProductCard,
        showDialogue,
        setShowDialogue,
        dialogData,
        setdialogData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
