import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const [inputMinutes, setInputMinutes] = useState<number>(0);
  const [inputSeconds, setInputSeconds] = useState<number>(0);
  const [remainingMinutes, setRemainingMinutes] = useState<number>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  // 残り時間をカウントダウンする関数
  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingSeconds > 0 || remainingMinutes > 0) {
        if (remainingSeconds === 0) {
          setRemainingMinutes((prev) => prev - 1);
          setRemainingSeconds(59);
        } else {
          setRemainingSeconds((prev) => prev - 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingMinutes, remainingSeconds]);

  // Enter キーが押されたときに時間を設定する関数
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setRemainingMinutes(inputMinutes);
      setRemainingSeconds(inputSeconds);
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(parseInt(e.target.value))}
          onKeyPress={handleKeyPress}
          ref={inputRef}
        />
        <span> : </span>
        <input
          type="number"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(parseInt(e.target.value))}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div>
        <input
          type="number"
          value={remainingMinutes}
          readOnly
        />
        <span> : </span>
        <input
          type="number"
          value={remainingSeconds}
          readOnly
        />
      </div>
    </div>
  );
}

export default Timer;
