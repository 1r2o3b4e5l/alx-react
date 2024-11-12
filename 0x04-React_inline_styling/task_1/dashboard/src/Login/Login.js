import React from 'react'
// import './Login.css'

import { StyleSheet, css } from 'aphrodite'

import WithLogging from '../HOC/WithLogging'

const Login = ({login}) => {
  return (
    <>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email" className={css(styles.labelS)}>email:</label>
          <input id="email" type="text" className={css(styles.labelS)}/>
          <label htmlFor="password" className={css(styles.labelS)}>password:</label>
          <input id="password" type="password" className={css(styles.labelS)}/>
          <button type='button' onClick={login}>OK</button>
        </form>
      </>
  )
}

export default WithLogging(Login)

// define Aphrodite styles
const styles = StyleSheet.create({
  labelS: {
    textTransform: 'capitalize',
    paddingRight: '1rem'
  },
  inputS: {
    marginRight: '1rem'
  }
})
