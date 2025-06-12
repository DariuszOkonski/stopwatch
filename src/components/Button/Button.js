import styles from './Button.module.scss';

const Button = ({ children, action, disabled = false }) => {
  return (
    <button
      onClick={action}
      className={`${styles.button} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
