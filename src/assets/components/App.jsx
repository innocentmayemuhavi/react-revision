import { AuthContext, AuthProvider } from "../context";
import { ChristmassDeals } from "./ChrismassDeals";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Deals } from "./Deals";
import { ProductCard } from "./ProductCard";

const App = () => {
  
  return (
    <AuthProvider>
      <Header />
    <ProductCard/>
      <Footer />
    </AuthProvider>
  );
};

export { App };
