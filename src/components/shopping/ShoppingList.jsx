import { useSelector } from "react-redux";
import Product from "./Product";
function ShoppingList() {
 const {productList} = useSelector((state) => state);
  return (
    <div>
      {productList.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ShoppingList;
