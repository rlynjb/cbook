import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>codebook</h1>
      <h4>Welcome to my project playground</h4>
      <a href="/">Home</a> | <a href="/uids/">UIDS</a>
    </div>
  );
}

export default Header;
