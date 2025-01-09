import React from 'react'
import '../App.css'
import { FaLink } from "@react-icons/all-files/fa/FaLink"
function LinkBox() {
  return (
    <div className='header'>
        <FaLink className='link-icon'/>
        <input className='link-input' type='text' placeholder='Paste YouTube Link'/>
    </div>
  )
}

export default LinkBox