import React, { useState, useEffect } from 'react';

function Timer() {
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (totalSeconds > 0) {
          setTotalSeconds((prevTotalSeconds) => prevTotalSeconds - 1);
        }
      }, 1000);
    } else {
        if (interval) {
          clearInterval(interval);
        }
      }
    
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
  }, [isRunning, totalSeconds]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTotalSeconds(0);
    setIsRunning(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const seconds = parseInt(value, 10);
    setTotalSeconds(isNaN(seconds) ? 0 : seconds);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center">
        <input
          type="number"
          value={totalSeconds}
          onChange={handleInputChange}
          className="w-24 h-10 text-center"
        />
      </div>
      <div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400" onClick={handleStartStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button className="mt-4 mx-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
