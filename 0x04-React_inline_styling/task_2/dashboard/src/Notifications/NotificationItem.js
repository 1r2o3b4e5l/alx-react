import React, { memo } from 'react'
import { StyleSheet, css } from 'aphrodite'

// const NotificationItem = (type, html=null, value) => {
const NotificationItem = memo(({value, html=null, type, read}) => {
  return (
    <>
    {
        html ? (
        <li data={type} dangerouslySetInnerHTML={{ __html: html()}} onClick={read} className={css(styles.ulLiUrgent)}></li>
        ) : ( 
        <li data={type} onClick={read} className={type === 'urgent' ? css(styles.ulLiUrgent) :  css(styles.ulLiDefault)}>{ value }</li> )
    }
    </>
  )
})

export default NotificationItem


// define aphrodite styles
const styles = StyleSheet.create({
  ulLiDefault: {
    color: 'blue'
  },
  ulLiUrgent: {
    color: 'red'
  }
})
