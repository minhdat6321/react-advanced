import { useEffect } from "react";
import { useState, useRef } from "react";

const useTimer = (ini = 0) => {

  const [time, setTime] = useState(ini);

  const isStart = useRef(true)
  // const isStart = setInterval(() => {
  //     setTime((time) => time + 1)
  //      console.log(time)
  //   }, 1000)
  // ;
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((oldTime) => oldTime + 1)
        console.log(`cos lamf`)
      }
    }, 1000);

    active.current.disabled = true;
  };
  const stopTimer = () => {
    isStart.current = false
    active.current.disabled = false;

    clearInterval(refInterval.current);
    // setTime(refInterval.current)
  };
  const resetTimer = () => {
    isStart.current = false
    setTime(ini)
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
