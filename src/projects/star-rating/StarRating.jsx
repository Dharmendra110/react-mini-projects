import { useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRating = () => {
  const [rate, setRate] = useState(0);
  return (
    <div className="text-4xl font-bold border-t m-5">
      <h1 className="m-5">Star Rating</h1>
      <div className="flex justify-center gap-5">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            className={`cursor-pointer ${star <= rate ? "text-yellow-400" : ""}`}
            onMouseMove={() => setRate(star)}
            key={star}
          >
            {<FaStar />}
          </span>
        ))}
      </div>
      <h1>{rate}</h1>
    </div>
  );
};

export default StarRating;
