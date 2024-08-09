import { useDispatch } from "react-redux";
import { addToCart } from "../store";

function Product({ item }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart({...item, quantity: 1}));
  }

  return (
    <div>
      <h2>{item.item}</h2>
      <h3>{item.price}</h3>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
