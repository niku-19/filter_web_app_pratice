import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ProductDataProvider from "./Context/Product.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <ProductDataProvider>
        <App />
      </ProductDataProvider>
    </BrowserRouter>
  </>
);
