import styles from './CVButton.module.css';
import useThemeContext from '../../hooks/useThemeContext';

const CVButton = () => {
  const theme = useThemeContext();

  return (
    <div className={styles.toggleWrapper}>
      <a href={'/Okunola_Joshua-CV.pdf'} download="Okunola_Josh-CV.pdf" className={styles.cvButton}>
        Download CV
      </a>
    </div>
  );
};

export default CVButton;
