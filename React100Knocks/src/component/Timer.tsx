import React, { useState, useEffect } from 'react';

function Timer() {
  const [totalTime, setTotalTime] = useState<number>(0);
  const [seconds, setSeconds] = useState<string>('00');
  const [minutes, setMinutes] = useState<string>('00');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onPress = () => {
    const audioCtx = new window.AudioContext();

    const nodes = [audioCtx.createOscillator(), audioCtx.createOscillator()];
    const hz = 1700;
    nodes.map((node) => {
      node.type = "sine";
      node.frequency.setValueAtTime(hz, audioCtx.currentTime);
      node.connect(audioCtx.destination);
    });

    const length = 0.1;
    const rest = 0.025;
    nodes[0].start(audioCtx.currentTime);
    nodes[0].stop(audioCtx.currentTime + length);
    nodes[1].start(audioCtx.currentTime + length + rest);
    nodes[1].stop(audioCtx.currentTime + length * 2 + rest);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      let totalSeconds = parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
      setTotalTime(totalSeconds);
      interval = setInterval(() => {
        if (totalTime > 0) {
            setTotalTime((prevTotalTime) => prevTotalTime - 1);
        }
        if (totalSeconds > 0) {
            totalSeconds--;
        
            const newMinutes = Math.floor(totalSeconds / 60);
            const newSeconds = totalSeconds % 60;
        
            setMinutes(newMinutes.toString().padStart(2, '0'));
            setSeconds(newSeconds.toString().padStart(2, '0'));

            if (totalSeconds == 0) onPress();
          } else {
            if (interval) clearInterval(interval);
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
  }, [isRunning, totalTime]);

  const validateInput = (minutes: number, seconds: number): boolean => {
    if (minutes < 0 || seconds < 0 || (minutes === 0 && seconds === 0)) {
      setErrorMessage('時間を正しく入力してください');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  const handleStartStop = () => {
    const isValid = validateInput(parseInt(minutes), parseInt(seconds));
  if (isValid) {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  }
  };

  const handleReset = () => {
    setTotalTime(0);
    setSeconds('00');
    setMinutes('00');
    setIsRunning(false);
  };

  const handleInputChangeMinutes = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMinutes(value.padStart(2, '0'));
  };

  const handleInputChangeSeconds = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSeconds(value.padStart(2, '0'));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center">
      <input
          type="text"
          value={minutes}
          onChange={handleInputChangeMinutes}
          className="w-24 h-10 text-center"
        />
        <span>:</span>
        <input
          type="text"
          value={seconds}
          onChange={handleInputChangeSeconds}
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
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </div>
  );
}

export default Timer;
