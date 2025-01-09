import React from 'react'
import {FaWindowClose} from '@react-icons/all-files/fa/FaWindowClose'
import{FaPlayCircle} from '@react-icons/all-files/fa/FaPlayCircle'
import{FaPlay} from '@react-icons/all-files/fa/FaPlay'
import {FaVideo} from '@react-icons/all-files/fa/FaVideo'
import {FaTimes} from '@react-icons/all-files/fa/FaTimes'
import {FaBalanceScaleRight} from '@react-icons/all-files/fa/FaBalanceScaleRight'
import { FaRuler} from '@react-icons/all-files/fa/FaRuler'
import {FaHdd} from '@react-icons/all-files/fa/FaHdd'
import {FaFile } from '@react-icons/all-files/fa/FaFile'
function Modal(props) {
  return (
    <div className='modal-cont'>
         <div className={`modal${props.isVisible ? "show" : ""}`}>
         <hr/>
          <div className='modal-container'>
           <div className='video-container'>
            <div className='video-logo'>
              <div className='play-logo'>
                <FaPlay size={20}/>
              </div>
            </div>
            <div className='video-detail'>
              <h3>Video Title</h3>
              <ul>
                <li>
                  <FaVideo/>
                  720p</li>
                <li>
                  <FaRuler />
                  05:32</li>
              </ul>
            </div>
           </div>
           <div className='configure-container'>
            <h4>
              Configure before Download
            </h4>
            <div className='format-selection'>
              <button className='audio'>Audio</button>
              <button className='video'>Video</button>
            </div>
            <div className='format-preference'>
              <p>Format preference</p>
              <div className='pref'>
                <button> <FaFile size={30}/>Quality</button>
                <button> <FaVideo/> 720p</button>
              </div>
            </div>
           </div>
          </div>
          <div className='modal-footer'>
            <button className='modal-btn cancel' onClick={props.closeModal}>
              <FaTimes size={15}/>
              cancel</button>
            <button className='modal-btn download'>Download</button>
          </div>
         </div>
    </div>
   
  )
}

export default Modal