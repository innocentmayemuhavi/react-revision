import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
function Main() {
  return (
    <main>
    <App/>
    </main>
  );
}
root.render(<Main />);
