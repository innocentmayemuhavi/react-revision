import { AuthContext, AuthProvider } from "../../context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartComponent } from "../cart/CartComponent";
import Homepage from "../homepage";
import { Checkout } from "../Checkout/Index";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/cart" element={<CartComponent />}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export { App };
