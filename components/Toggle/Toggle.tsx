import Image from 'next/image';
import styles from './Toggle.module.css';
import useThemeContext from '../../hooks/useThemeContext';
import { Theme } from '../../context/ThemeContext';

const Toggle = () => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div className={styles.toggleWrapper}>
      <Image
        onClick={toggleTheme}
        /* loader={myLoader} */ src={theme === Theme.dark ? '/icons8-sun.svg' : '/moon-and-stars-svgrepo-com.svg'}
        className={styles.icon}
        alt="Picture of the author"
        width={40}
        height={40}
      />
    </div>
  );
};

export default Toggle;
