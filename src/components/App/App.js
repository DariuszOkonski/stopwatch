import Button from '../Button/Button';
import Display from '../Display/Display';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Display />

      <div className={styles.buttons}>
        <Button>start</Button>
        <Button>stop</Button>
        <Button>reset</Button>
      </div>
    </div>
  );
}

export default App;
