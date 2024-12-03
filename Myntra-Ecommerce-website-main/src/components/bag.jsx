import "./bag.css";

import { Cart } from "./cart";
import { useCartContext } from "./cartcontext";
import { useThemecontext } from "./themecontext";
export const Bag = () => {
  const { currenttheme } = useThemecontext();
  const { cart } = useCartContext();
  const { addtobag } = useCartContext();
  var total = 0;


  {
    cart.map((ele) => (
     total = total + Number(ele.price.slice(1)*ele.amount)));
  }
  var itemscount=0;
  {
    cart.map((ele) => itemscount+=ele.amount);
  }
  const discount = Math.round(0.1 * total);
  const finalamount = total - discount+50;
  if (cart.length !== 0) {
    return (
      <>
        <div className="fakeheader"></div>

        <div className="body">
          <div className="cartsection">
            {cart.map((ele) => (
              <Cart key={ele.id} prop={ele}></Cart>
            ))}
          </div>

          <div className={currenttheme === "light" ? "subtotal" : "darksubtotal"}>
            <h5 className="pricedetails">PRICE DETAILS</h5>
            <span>({itemscount} Items)</span>
            <div className="cashsection">
              <div className="cartdetails">
                <p>Total MRP</p>
                <p>Discount</p>
                <p>Shipping Charge</p>
              </div>
              <div className="cashtotal">
                <p>₹{total}</p>
                <p className="discount">-₹{discount}</p>
                <p>₹50</p>
                <hr />
              </div>
            </div>
            <hr></hr>
            <div className="finalcash">
              <span className="Total">Total Amount</span>
              <span className="finalamount">₹{finalamount}</span>
            </div>
            <button className="button2">Place Order</button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="fakeheader"></div>
        <h4 className="addtocart2">ADD TO CART</h4>
      </>
    );
  }
};
