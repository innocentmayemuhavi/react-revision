import { AuthContext, AuthProvider } from "../context";
import { ChristmassDeals } from "./ChrismassDeals";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Deals } from "./Deals";
const App = () => {
  return (
    <AuthProvider>
      <Header />
      <ChristmassDeals />
      <Deals />
      <Footer />
    </AuthProvider>
  );
};

export { App };
