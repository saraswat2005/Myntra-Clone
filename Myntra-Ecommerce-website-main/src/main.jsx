import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./components/cartcontext.jsx";
import { ProductProvider } from "./components/productcontext.jsx";
import { Themeprovider } from "./components/themecontext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <CartProvider>
      <Themeprovider>
        <App />
      </Themeprovider>
    </CartProvider>
  </ProductProvider>
);
