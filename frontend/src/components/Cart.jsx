import { useContext } from "react";
import { CartContext } from "../CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Review Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            alignItems: "center"
          }}>
            
            {/* IMAGE */}
            <img src={item.img} alt={item.name} width="100" />

            {/* DETAILS */}
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>

          </div>
        ))
      )}
    </div>
  );
}

export default Cart;