import { Shipping } from "./components/shipping/Shipping";
import { Contact } from "./components/contact/Contact";
import { OrderSummary } from "./components/orderSummary/OrderSummary";
import { NavbarCheckout } from "./components/navbar/Navbar-checkout";

export const Checkout = () => {
  return (
    <>
      <NavbarCheckout />
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
