import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, remove, update } from "./productSlice";
import { useNavigate } from "react-router";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/products");
    }
  }, [cart, navigate]);

  function handleRemove(id) {
    dispatch(remove(id));
  }

  function clearData() {
    dispatch(clear());
  }

  function manageQuantity(id, q) {
    const quantity = Number(q) ? Number(q) : 1;
    dispatch(update({ id, quantity }));
  }

  const total = cart
    .reduce(
      (sum, item) =>
        item.quantity ? sum + item.price * item.quantity : sum + item.price,
      0,
    )
    .toFixed(2);
  return (
    <div>
      <h1 className="text-3xl underline font-bold m-5 text-orange-500">
        Cart Items
      </h1>

      <div className=" text-right ">

        <span className="text-right text-xl fixed right-7 top-20 font-bold  bg-green-600 p-2 rounded">
          Total Price: {total}
        </span>
        <button
          onClick={clearData}
          className="text-xl p-2 mx-20 font-bold bg-[#DC2626]  rounded hover:scale-105"
        >
          Clear Data
        </button>
      </div>
      <div></div>
      {cart.map((item) => (
        <div
          key={item.id}
          className="border mx-20 flex border-gray-500 justify-around  bg-gray-800 m-3"
        >
          <div className="flex items-center w-92 mx-20">
            <img className="w-48" src={item.thumbnail} alt="Proudcts-imgage" />

            <div>
              <h1>{item.title}</h1>
              <h1 className="text-yellow-400">{item.rating}</h1>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center mx-10 gap-3">
            <h1 className="text-green-500 text-lg font-bold float-rig">
              {(item.quantity
                ? item.price * item.quantity
                : item.price
              ).toFixed(2)}
            </h1>

            <div className=" flex  gap-2  ">
              <input
                value={item.quantity ? item.quantity : 1}
                onChange={(e) => manageQuantity(item.id, e.target.value)}
                className="w-20 p-2  border border-gray-600 rounded "
                type="number"
              />{" "}
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 hover:bg-red-600 rounded p-2
            "
              >
                Remove From Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Cart;
