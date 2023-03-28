import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  SeachVal: "",
  setSearchval: () => {},
  Cart: {
    items: [],
    total: 0,
  },
  User: {
    name: "Innocent_Maye_Muhavi",
    id: 40185261,
    Residence: "Ngong",
    email: "innocentmuhavimaye@gmail.com",
    phone: "0796331359",
  },
  setUser: () => {},
  setCart: () => {},
  Added: {},
  setAdded: () => {},

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
  showProductCard: false,
  setShowProductCard: () => {},
  dialogData: {},
  setdialogData: () => {},
  showCheckout: false,
  setShowCheckout: () => {},
});

const AuthProvider = ({ children }) => {
  const [SeachVal, setSearchval] = useState("");
  const [Cart, setCart] = useState({
    items: [],
    total: 0,
  });

  const [Added, setAdded] = useState({});

  const [isLoggedin, setLoggedin] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);
  const [isExisting, setisExisting] = useState(false);
  const [productCard, setProductCard] = useState({});
  const [showProductCard, setShowProductCard] = useState(false);
  const [dialogData, setdialogData] = useState({});
  const [showCheckout, setShowCheckout] = useState(false);
  const [User, setUser] = useState({
    name: "Innocent_Maye_Muhavi",
    id: 40185261,
    Residence: "Ngong",
    email: "innocentmuhavimaye@gmail.com",
    phone: "0796331359",
  });
  useEffect(() => {
    const savedCart =
      localStorage.getItem("Cart") === "undefined"
        ? {
            items: [],
            total: 0,
          }
        : JSON.parse(localStorage.getItem("Cart"));
   setCart(savedCart)

  }, []);

  useEffect(()=>{
if(Cart){
  localStorage.setItem("Cart",JSON.stringify(Cart))
}
  },[Cart])
  return (
    <AuthContext.Provider
      value={{
        SeachVal,
        setSearchval,
        Added,
        setAdded,
        Cart,
        setCart,
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
        setdialogData,
        showCheckout,
        setShowCheckout,
        User,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
