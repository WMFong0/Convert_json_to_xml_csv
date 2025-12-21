import logo from './logo.svg';
import './App.css';
import { fax } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);

  // You can pass formData as a fetch body directly:
  fetch('/some-api', { method: form.method, body: formData });

  // Or you can work with it as a plain object:
  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
  
  // Update xml
  setxmlText(text)
  // Update csv
  setcsvText(text)
}

function App() {
  const [xmltext, setxmlText, csvtext, setcsvText] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className='input'>
        <form method="post" onSubmit={handleSubmit}>
          <label>
            Place your text here:
            <textarea name="json-text" defaultValue="" rows={4} cols={40}/>
          </label>
          <hr />
          <button type="reset"><FontAwesomeIcon icon={fax} />Reset Text</button>
          <button type="submit">Convert</button>
        </form>
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

export default App;
