import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import ChristmassDeals from "./ChrismassDeals";
const root = ReactDOM.createRoot(document.getElementById("root"));
function Main() {
  return (
    <main>
      <Header />
      <p>Christmass deals...</p>
        <hr/>
      <ChristmassDeals />
      <Footer />
    </main>
  );
}
root.render(<Main />);
