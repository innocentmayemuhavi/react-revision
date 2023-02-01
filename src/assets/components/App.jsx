import { AuthContext, AuthProvider } from "../context";
import { ChristmassDeals } from "./ChrismassDeals";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Deals } from "./Deals";
import { ProductCard } from "./productcard/index";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { CartComponent } from "./CartComponent";
import Homepage from "./homepage";

const App = () => {
  
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/cart" element={<CartComponent/>}></Route>
      </Routes>
      </BrowserRouter>
 
    </AuthProvider>
   
  );
};

export { App };
