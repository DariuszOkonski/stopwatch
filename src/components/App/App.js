import { useState } from 'react';
import Button from '../Button/Button';
import Display from '../Display/Display';
import styles from './App.module.scss';

function App() {
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
  const [isStopped, setIsStopped] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    const timeIntervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 100);
    setTimeInterval(timeIntervalId);
    setIsRunning(true);
  };
  const handleStop = () => {
    clearInterval(timeInterval);
    setRunningFlags(null, true, false);
  };
  const handleReset = () => {
    clearInterval(timeInterval);
    setTime(0);
    setRunningFlags(null, false, false);
  };

  const setRunningFlags = (
    localTimeInterval,
    localIsStopped,
    localIsRunning
  ) => {
    setTimeInterval(localTimeInterval);
    setIsStopped(localIsStopped);
    setIsRunning(localIsRunning);
  };

  return (
    <div className={styles.app}>
      <Display time='123581023' />

      <div className={styles.buttons}>
        <Button disabled={time} action={handleStart}>
          start
        </Button>
        <Button disabled={!isRunning} action={handleStop}>
          stop
        </Button>
        <Button disabled={!isStopped} action={handleReset}>
          reset
        </Button>
      </div>
    </div>
  );
}

export default App;
