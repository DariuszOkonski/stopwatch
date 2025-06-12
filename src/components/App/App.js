import { useState } from 'react';
import Button from '../Button/Button';
import Display from '../Display/Display';
import styles from './App.module.scss';

function App() {
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    const timeIntervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1);
    setTimeInterval(timeIntervalId);
    setIsRunning(true);
  };
  const handleStop = () => {
    clearInterval(timeInterval);
    setIsRunning(false);
  };
  const handleReset = () => {
    clearInterval(timeInterval);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className={styles.app}>
      <Display time={time} />

      <div className={styles.buttons}>
        <Button disabled={isRunning} action={handleStart}>
          start
        </Button>
        <Button disabled={!isRunning} action={handleStop}>
          stop
        </Button>
        <Button action={handleReset}>reset</Button>
      </div>
    </div>
  );
}

export default App;
