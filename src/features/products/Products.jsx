import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, fetchProducts, remove } from "./productSlice";
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const cart = useSelector((state) => state.products.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Add
  function handleAdd(item) {
    dispatch(add(item));
  }

  // Remove
  function handleRemove(id) {
    dispatch(remove(id));
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-500 underline">
        Products Lists
      </h1>
      <div className="flex justify-center flex-wrap gap-2 m-5">
        {products.map((item) => {
          const isCart = cart.some((cartItem) => cartItem.id === item.id);
          return (
            <div key={item.id} className="border border-gray-500  bg-gray-800">
              <p>
                <img
                  className="w-72"
                  src={item.thumbnail}
                  alt="products images"
                />
              </p>
              <h1 className="w-72">{item.title}</h1>
              <div className="flex justify-center gap-5">
                <h1 className="text-green-400"> Price: {item.price}</h1>
                <h1 className="text-yellow-400">Rating: {item.rating}</h1>
              </div>
              <button
                onClick={
                  isCart ? () => handleRemove(item.id) : () => handleAdd(item)
                }
                className={`${!isCart ? "bg-yellow-500" : "bg-red-600"} m-3 p-2  rounded text-xl`}
              >
                {isCart ? "Delete" : "Add"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
