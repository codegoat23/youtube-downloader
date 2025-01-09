import logo from './logo.svg';
import './App.css';
import LinkBox from './components/LinkBox';
import Action from './components/Action';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const[modal,setModal] = useState(false)
  function handleFirstDownload(){
    setModal(true)
  }
  function closeModal(){
    setModal(false)
  }
  return (
    <div className="app">
      {modal && <Modal isVisible={isVisible} closeModal={closeModal}/>}
      <div className='upper-row'> 

         <LinkBox/>
      </div>
      <div className='lower-row'>
        <Action onClick={handleFirstDownload} />
      </div>
      

    </div>
  );
}

export default App;
