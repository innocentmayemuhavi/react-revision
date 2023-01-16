import { AuthContext, AuthProvider } from "../context";
import { ChristmassDeals } from "./ChrismassDeals";
import { Header } from "./Header";
import { Footer } from "./Footer";
const App = () => {
  return (
    <AuthProvider>
      <Header />
      <ChristmassDeals />
      <Footer />
    </AuthProvider>
  );
};

export { App };
