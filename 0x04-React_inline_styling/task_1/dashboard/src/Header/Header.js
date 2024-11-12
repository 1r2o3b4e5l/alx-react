import React from 'react'
import logo from '../logo.jpg';
// import './Header.css'

import { StyleSheet, css } from 'aphrodite';


const Header = () => {
  return (
    <div className={css(styles.Header)}>
        <img src={logo} alt='logo' height={200}></img>
        <h1>School dashboard</h1>
    </div>
  )
}

export default Header

// Aphrodite styles
const styles = StyleSheet.create({
  Header: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgb(225, 67, 67)'
}
})
