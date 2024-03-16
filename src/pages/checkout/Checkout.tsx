import { Shipping } from "./components/shipping/Shipping";
import { Contact } from "./components/contact/Contact";
import { OrderSummary } from "./components/orderSummary/OrderSummary";
import { Navbar } from "./components/navbar/Navbar-checkout";

export const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <div className="contact-info">
          <Shipping />
          <Contact />
        </div>
        <div className="order-summary-content">
        <OrderSummary />
        </div>
      </div>
   </>
  );
};
