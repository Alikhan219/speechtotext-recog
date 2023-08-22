import React, { useState } from 'react'
import './App.css'
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";
const App = () => {
 
 const [language, setLanguage]= useState('ur')
  const startList= ()=>SpeechRecognition.startListening({ continuous: true, language:language })
 
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  const [isCopied, setCopied] = useClipboard(transcript);


  const inputEvent=(value)=>{
    setLanguage(value.target.value)
    console.log(value.target.value)
  }

  return (
    <>
      <div className="container">
      <h2>Welcome To</h2>
        <h2>Speech To Text Convertor</h2>
        <br />
        <p>Enjoy the convenience of capturing and saving your thoughts, ideas, and conversations with just a few taps. Say it aloud, and we'll turn it into text for you. Enhance your productivity and accessibility with our intuitive and reliable Speech-to-Text Converter app</p>
        <label className='labeles'>Select A Language: </label>
<select id="select" name="carlist" form="carform"  onChange={inputEvent}>
  <option value="ar" >Arabic</option>
  <option value="ur-PK" >Urdu</option>
  <option value="en" >English</option>
</select>
        <div className='my-main-content'>
        <div className="main-content" id='main'>
        {transcript}
        </div>
        <div className="btn_style">
        <button onClick={setCopied} className='button-63'>
       {isCopied ? "Copied 👍" : "Copy To Clipboard"}
    </button>
          <button onClick={startList} className='button-63'>Start Listning</button>
          <button onClick={SpeechRecognition.stopListening}className='button-63'>Stop  Listning</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App

