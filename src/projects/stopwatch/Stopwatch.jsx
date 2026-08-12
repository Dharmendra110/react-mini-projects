import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [lap, setLap] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setTime(0);
  }

  function handleLap() {
    setLap([...lap, time]);
  }

  function formatTime(time) {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;

    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  return (
    <div className="border-t m-5">
      <h1 className="text-4xl font-bold">Stopwatch</h1>
      <h1>{formatTime(time)}</h1>
      <button onClick={handleLap} className="bg-green-500 rounded p-2 m-1">
        Lap
      </button>
      <button onClick={handleStart} className="bg-green-500 rounded p-2 m-1">
        Start
      </button>
      <button onClick={handlePause} className="bg-blue-500 p-2 rounded m-1">
        Pause
      </button>
      <button onClick={handleReset} className="bg-red-600 p-2 rounded m-1">
        Reset
      </button>
      {lap.map((t) => (
        <h1>{t}</h1>
      ))}
    </div>
  );
};

export default Stopwatch;
