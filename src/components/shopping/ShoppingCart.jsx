import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store";
import { useTheme } from "../contexts/ThemeContext";

function ShoppingCart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  console.log(cart);
  const { theme } = useTheme();
  return (
    <div className={`${theme}`}>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>name: {item.item}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            remove
          </button>
          <button
            onClick={() => dispatch(updateQuantity(item.id, item.quantity + 1))}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
