import { AuthContext, AuthProvider } from "../../context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartComponent } from "../cart/CartComponent";
import { useContext } from "react";
import Homepage from "../homepage";

const App = () => {

  const r1=localStorage.getItem(1)

  if(r1<1){
    localStorage.setItem("Cart",JSON.stringify([{

    }]))
  }
  else{
    console.log("done")
  }
 
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/cart" element={<CartComponent />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export { App };
