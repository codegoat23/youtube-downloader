import React, { useState } from 'react';
import './App.css';
import LinkBox from './components/LinkBox';
import Action from './components/Action';
import Modal from './components/Modal';


function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Fetch video info from yt-dlp backend
  

  const fetchVideoInfo = async () => {
    if (!videoUrl) {
      alert('Please enter a valid YouTube link.');
      return;
    }
  
    setLoading(true); // Start loading
  
    try {
      console.log('Sending request to backend with videoUrl:', videoUrl); // Log the video URL
  
      const response = await fetch('http://localhost:5000/get-video-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoUrl }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch video info: ${response.statusText}`);
      }
  
      const info = await response.json();
      console.log('Received video info:', info); // Log the backend response
      setVideoInfo(info);
      setModalVisible(true); // Show modal with video info
    } catch (error) {
      console.error('Error fetching video info:', error.message);
      alert('Error fetching video information. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };
  

  
  
  // Close Modal
  const closeModal = () => {
    setModalVisible(false);
  };
console.log(videoInfo);
  return (
    <div className="app">
      {modalVisible && (
        <Modal
          isVisible={modalVisible}
          closeModal={closeModal}
          videoInfo={videoInfo}
        />
      )}

      <div className="upper-row">
        <LinkBox videoUrl={videoUrl} handleUrlChange={(e) => setVideoUrl(e.target.value)} />
      </div>

      <div className="lower-row">
        <Action onClick={fetchVideoInfo} />
      </div>

    
    </div>
  );
}

export default App;
