import React from 'react';
import withMousePosition from '../../hoc/withMousePosition';
import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={`${styles.header}`}>
      {props.mouseX}
      {props.mouseY}
      {props.children}
      {/* <Searchbar onSearch = {props.onSearch}/> */}
    </header>
  );
}

export default withMousePosition(Header);
