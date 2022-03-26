import styles from './CVButton.module.css';
import useThemeContext from '../../hooks/useThemeContext';

const CVButton = () => {
  const theme = useThemeContext();

  return (
    <div className={styles.toggleWrapper}>
      <a href={'/OkunolaJoshua.pdf'} download="OkunolaJoshuaCV.pdf" className={styles.cvButton}>
        Download CV
      </a>
    </div>
  );
};

export default CVButton;
