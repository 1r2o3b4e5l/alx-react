import React, { Component } from 'react'
// import './Notifications.css'

import { StyleSheet, css } from 'aphrodite'

import NotificationItem from './NotificationItem'

// const Notifications = ({displayDrawer=true, listNotifications=[]}) => {
class Notifications extends Component {

  log = () => console.log('Close button has been clicked')
  style = {
    position: "absolute",
    right: ".25rem",
    top: ".25rem",
    background: "transparent",
    border: "none",
  }

  markAsRead = (id) => {
    console.log(`Notification $${id} has been marked as read`)
  }

  componentDidUpdate() {
    console.log('Notifications rerendering ...')
  }
  // the method is called by default every time the parent component re-renders (provide the re-render only on change optimization)
  shouldComponentUpdate(nextProps) {
    // re-render only if notificationsList grows... (nextProps is the props the component is about to render with)
    return nextProps.listNotifications.length > this.props.listNotifications.length
  }

  render() {
    const displayDrawer = this.props.displayDrawer
    const listNotifications = this.props.listNotifications
    // console.log(displayDrawer)
    // console.log(listNotifications)
    return (
      <>
    <div>
        <p className={css(styles.menuItemP)}>Your notifications</p>
      </div>
      { displayDrawer && 
        <div className={css(styles.Notifications)} style={{position: "relative"}}>
          { listNotifications.length > 0 ? (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {
                  listNotifications.map((item) => <NotificationItem key={item.id} type={item.type} value={item.value}
                    html={item.html} read={() => this.markAsRead(item.id)} styles={styles}/>)
                }
              </ul>
              <button aria-label='Close' onClick={this.log} style={this.style}>x</button>
            </> ) : (<p> No new notifications for now</p>)
          }
        </div>
      }
      </>
    )
  }
}

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: []

}

export default Notifications


// define aphrodite styles
const styles = StyleSheet.create({
  menuItemP: {
    textAlign: 'right'
},
Notifications: {
    border: '2px solid #e0354b',
    padding: '1rem',
    borderStyle: 'dashed',
    width: '40%',
    right: 0,
    marginLeft: '57%'
},
ulLiDefault: {
    color: 'blue'
},
ulLiUrgent: {
    color: 'red'
},
})
