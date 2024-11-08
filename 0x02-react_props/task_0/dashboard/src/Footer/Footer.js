import React from 'react'
import { getFooterCopy, getFullYear } from '../utils';
import './Footer.css'

const Footer = () => {
  return (
    <div className='App-footer'>
        <p><em>Copyright { getFullYear() } - { getFooterCopy(true) } </em></p>
    </div>
  )
}

export default Footer
