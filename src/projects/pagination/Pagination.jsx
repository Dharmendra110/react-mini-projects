import { useState } from "react";

const data = Array.from({ length: 500 }, (_, i) => `Item ${i + 1}`);

const Pagination = () => {
  const [pages, setPages] = useState(1);
  const itemsPerPage = 20;
  const totalPages = data.length / itemsPerPage;
  const startIndex = (pages - 1) * itemsPerPage;
  const currentPage = data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div>
      <h1 className="m-5 text-3xl font-extrabold text-purple-500">
        Pagination
      </h1>
      {currentPage.map((page, i) => (
        <h1 key={i}>{page}</h1>
      ))}
      <div className="flex justify-center gap-5">
        <button
          onClick={() => setPages((p) => p - 1)}
          disabled={pages === 1}
          className={`border rounded px-3 py-1 ${pages === 1 ? "bg-gray-800 cursor-not-allowed" : "bg-blue-500 text-white"}`}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => {
          if (i === 0) {
            return (
              <button
                key={i}
                onClick={() => setPages(1)}
                className={`border rounded p-1 px-3 m-2 bg-green-500 ${pages === 1 ? "text-xl font-bold" : ""}`}
              >
                1
              </button>
            );
          }

          if (i === totalPages - 1) {
            return (
              <button
                key={i}
                onClick={() => setPages(totalPages)}
                className={` border rounded p-1 px-3 m-2 bg-green-500  ${pages === totalPages ? "text-xl font-bold" : ""}`}
              >
                {totalPages}
              </button>
            );
          }

          if (i >= pages - 2 && i <= pages + 2) {
            return (
              <button
                key={i}
                onClick={() => setPages(i + 1)}
                className={`border rounded p-1 px-3 m-2 bg-green-500  ${pages === i + 1 ? "text-xl font-bold" : ""}`}
              >
                {i + 1}
              </button>
            );
          }

          if (i === 1 && pages > 4) {
            return (
              <span className="mt-3" key={i}>
                ...
              </span>
            );
          }
          if (i === totalPages - 2 && pages < totalPages - 3) {
            return (
              <span className="mt-3" key={i}>
                ...
              </span>
            );
          }
          return null;
        })}
        <button
          onClick={() => setPages((p) => p + 1)}
          disabled={pages === totalPages}
          className={` px-4 border rounded ${pages === totalPages ? "bg-gray-800 cursor-not-allowed" : "bg-blue-500"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
