import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import { Homepage } from "./pages/homepage/Homepage";
import { Checkout } from "./pages/checkout/Checkout";
import { Provider } from "./context/Provider";
import Details from "./pages/product-details/Details";
import {APIError} from "./pages/APIError/APIError";

function App() {

  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/erro" element={<APIError />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
