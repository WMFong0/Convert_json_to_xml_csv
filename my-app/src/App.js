import logo from './logo.svg';
import './App.css';
import { fax } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
function App() {
  const [text, setText, xmltext, setxmlText, csvtext, setcsvText] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className='input'>
          <label>
            Place your text here:
            <textarea value={text} rows={4} cols={40} onChange={do_this_when_text_changes}/>
          </label>
          <button type="reset" onClick={()=>{setText('')}}><FontAwesomeIcon icon={fax} />Reset Text</button>
          <button type="submit" onClick={()=>{
            {text ? (
              alert("Converting....")
            ) : (
              alert("Empty text box")
            )}
          }}>Submit</button>
        </div>
        <div className='xml'>
          <p>Your xml text:</p>
          <p id = "xml-text">{xmltext}</p> 
        </div>
        <div className='csv'>
          <p>Your csv text:</p>
          <p id = "csv-text">{csvtext}</p> 
        </div>
      </header>
    </div>
  );
}
function do_this_when_text_changes(){
  // Update xml
  setxmlText(text)
  // Update csv
  setcsvText(text)
}

export default App;
