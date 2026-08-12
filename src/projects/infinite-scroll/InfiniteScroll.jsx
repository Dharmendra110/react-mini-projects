import { useCallback, useEffect, useRef, useState } from "react";

const InfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const loaderRef = useRef(null);

  const fetchData = useCallback(async (pageItem) => {
    setLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newData = Array.from(
      { length: 10 },
      (_, i) => `Infinte  Item ${(pageItem - 1) * 10 + i + 1}`,
    );
    setItems((prev) => [...prev, ...newData]);
    setLoading(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData(page);
  }, [page, fetchData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 },
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading]);
  return (
    <div>
      <h1 className="text-3xl font-extrabold ">Infinite Scrolling</h1>
      {items.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
      <div className="text-2xl font-bold text-yellow-500 mt-5" ref={loaderRef}>
        {loading ? "Loading..." : ""}
      </div>
    </div>
  );
};

export default InfiniteScroll;
