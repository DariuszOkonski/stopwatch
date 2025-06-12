import Button from '../Button/Button';
import Display from '../Display/Display';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Display />

      <Button>start</Button>
    </div>
  );
}

export default App;
