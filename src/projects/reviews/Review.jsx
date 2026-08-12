import { useState } from "react";
import { FaStar } from "react-icons/fa";
const Rating = () => {
  const [store, setStore] = useState([]);
  const [rate, setRate] = useState(0);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [name, setName] = useState("");

  const stars = [1, 2, 3, 4, 5];
  // get
  function addValue() {
    if (!name.trim() || !title.trim() || !des.trim()) {
      return alert("Please fill all the input field");
    }
    const newData = {
      id: Date.now(),
      rate,
      title,
      des,
      name,
    };
    setStore([...store, newData]);
    setDes("");
    setName("");
    setRate(0);
    setTitle("");
  }

  function getRatting() {
    const total = store.length;
    const counts = stars.map(
      (star) => store.filter((item) => item.rate === star).length,
    );
    console.log("counts", counts);
    // convert counts to percentages
    const percentages = counts.map((count) =>
      total > 0 ? ((count / total) * 100).toFixed(2) : 0,
    );
    console.log("percentages", percentages);
    return percentages;
  }

  return (
    <div>
      <h1 className="text-2xl text-purple-500 font-bold">Rating Component</h1>
      <div className="flex justify-center gap-4 m-10">
        <h1 className="b">Rating</h1>
        {stars.map((star) => (
          <div key={star}>
            <span
              onClick={() => setRate(star)}
              className={`${rate >= star ? "text-amber-500" : ""}`}
            >
              {<FaStar />}
            </span>
          </div>
        ))}
      </div>
      <label className="font-bold text-lg" htmlFor="title">
        Title
      </label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded p-1 ms-2"
        type="text"
        id="title"
        placeholder="Summarize your experince"
      />{" "}
      <br />
      <label className="font-bold text-lg" htmlFor="desc">
        Description
      </label>
      <input
        value={des}
        onChange={(e) => setDes(e.target.value)}
        className="border rounded p-1  m-2"
        type="text"
        id="desc"
        placeholder="Share your detailed experience"
      />
      <br />
      <label className="font-bold text-lg" htmlFor="name">
        Name
      </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-1 rounded m-2"
        type="text"
        id="name"
        placeholder="Enter your name"
      />{" "}
      <br /> <br />
      <button onClick={addValue} className="text-xl bg-blue-700 p-2 rounded ">
        Submit
      </button>
      <div className="m-5">
        <h2 className="text-xl text-purple-500 font-bold">Rating Breakdown</h2>
        {getRatting().map((percent, index) => (
          <p key={index}>
            {index + 1} Star: {percent}%
          </p>
        ))}
      </div>
      <div>
        <h1 className="text-4xl font-extrabold text-purple-500">
          custom value
        </h1>
        <table className="m-auto">
          <thead>
            <tr>
              <th className="border border-blue-200 bg-sky-800  px-10 py-2">
                Title
              </th>
              <th className="border border-blue-200 bg-sky-800  px-10 py-2">
                Name
              </th>
              <th className="border border-blue-200 bg-sky-800  px-10 py-2">
                Rating
              </th>
              <th className="border border-blue-200 bg-sky-800  px-10 py-2">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {store.map((item) => (
              <tr key={item.id}>
                <td className="border py-2 px-10 bg-gray-800"> {item.title}</td>
                <td className="border py-2 px-10 bg-gray-800"> {item.des}</td>
                <td className="border py-2 px-10 bg-gray-800"> {item.rate}</td>
                <td className="border py-2 px-10 bg-gray-800"> {item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rating;
