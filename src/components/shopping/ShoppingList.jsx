import { useSelector } from "react-redux";
import Product from "./Product";
import { useTheme } from "../contexts/ThemeContext";
function ShoppingList() {
 const {productList} = useSelector((state) => state);
  const { theme } = useTheme();
  // console.log(theme);
  return (
    <div className={`${theme}`}>
      {productList.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ShoppingList;
