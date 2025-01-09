import React from 'react'
import { FaBeer } from "@react-icons/all-files/fa/FaBeer"
import { FaPaste } from "@react-icons/all-files/fa/FaPaste"
import { FaClipboard } from "@react-icons/all-files/fa/FaClipboard"
import {FaDownload} from "@react-icons/all-files/fa/FaDownload"
function Action(props) {
  return (
    <div className='action'>
       
        <button onClick={props.onClick}><FaDownload size={20}/></button>
    </div>
  )
}

export default Action