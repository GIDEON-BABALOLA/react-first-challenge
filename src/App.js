import Square from "./Square";
import Input from "./Input";
import Voice from "./Voice";
import { useState, useEffect } from "react";
function App() {
  useEffect(() => {
    console.log("Gideon") // Gets called at every render
  }, [])
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className="App">
<Voice setColorValue={setColorValue} colorValue={colorValue}/>
<Square colorValue={colorValue} hexValue={hexValue} isDarkText={isDarkText}/>
<Input colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} isDarkText={isDarkText} setIsDarkText={setIsDarkText}/>
    </div>
  );
}

export default App;
