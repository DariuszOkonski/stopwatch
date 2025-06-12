import { useState } from 'react';
import Button from '../Button/Button';
import Display from '../Display/Display';
import styles from './App.module.scss';

function App() {
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);

  const handleStart = () => {
    console.log('start');
    const timeIntervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setTimeInterval(timeIntervalId);
  };
  const handleStop = () => {
    console.log('stop');
    clearInterval(timeInterval);
    setTimeInterval(null);
  };
  const handleReset = () => {
    console.log('reset');
    clearInterval(timeInterval);
    setTime(0);
    setTimeInterval(null);
  };

  return (
    <div className={styles.app}>
      <Display />

      <div className={styles.buttons}>
        <Button disabled={false} action={handleStart}>
          start
        </Button>
        <Button disabled={false} action={handleStop}>
          stop
        </Button>
        <Button disabled={true} action={handleReset}>
          reset
        </Button>
      </div>
    </div>
  );
}

export default App;
