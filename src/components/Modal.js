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

  function formatVideoDuration(seconds) {
    const hours = Math.floor(seconds / 3600); // Get hours
    const minutes = Math.floor((seconds % 3600) / 60); // Get minutes
    const secs = seconds % 60; // Get seconds
  
    // Format to ensure two digits for minutes and seconds
    return `${hours > 0 ? hours + ':' : ''}${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  // Example usage with a video duration of 5000 seconds
  const videoDuration = props.videoInfo.lengthSeconds;
  console.log(formatVideoDuration(videoDuration)); // Output: "1:23:20"

  return (
    <div className='modal-cont'>
         <div className={`modal ${props.isVisible ? "show" : ""}`}>
         <hr/>
          <div className='modal-container'>
           <div className='video-container'>
            <div className='video-logo'>
             <img src={props.videoInfo.thumbnail} className="play-logo"/>
            </div>
            <div className='video-detail'>
              <h3>{props.videoInfo.title}</h3>
              <ul>
                <li>
                  <FaVideo/>
                  720p</li>
                <li>
                  <FaRuler />
                  {formatVideoDuration(videoDuration)}</li>
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