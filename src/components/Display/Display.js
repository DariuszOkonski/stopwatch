import {
  padToThreeDigits,
  padToTwoDigits,
  parseMilliseconds,
} from '../../utils/utils';
import styles from './Display.module.scss';

const Display = ({ time }) => {
  const { hours, minutes, seconds, milliseconds } = parseMilliseconds(time);

  return (
    <div className={styles.display}>
      <p>
        {padToTwoDigits(hours)}:{padToTwoDigits(minutes)}:
        {padToTwoDigits(seconds)}.{padToThreeDigits(milliseconds)}
      </p>
    </div>
  );
};

export default Display;
