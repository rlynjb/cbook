import styles from './header.module.css';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>codebook</h1>
      <h4>Welcome to my project playground</h4>
      <Link to={'/'}>Home</Link> | <Link to={'/uids/'}>UIDS</Link>
    </div>
  );
}

export default Header;
