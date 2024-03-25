import React, {useEffect}  from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const Voice = ({ setColorValue, colorValue }) => {
    
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  const startListening = () => SpeechRecognition.startListening({ continuous: true })
  useEffect(() => {
    console.log(transcript)
    setColorValue(transcript)
  }, [transcript])
  // transcript is the text of the voice
  // resetTranscript is the clear out the transcript
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <div>
    <span style={{fontSize : "50%"}} onClick={startListening}>Allow Audio</span>

    </div>
  )
}
export default Voice