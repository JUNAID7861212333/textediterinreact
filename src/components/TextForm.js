import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convetrt to uppercase !", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convetrt to lowercase !", "success");
  };

  const handleclearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("convetrt to clear  !", "danger");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };

  const handlCopy = () => {
    var textToCopy = document.getElementById('myBox');
    textToCopy.select();
    navigator.clipboard.writeText(textToCopy.value);
  };

  const handlbackspace = () => {
    let lastSpaceIndex = text.lastIndexOf(' ');
    if (lastSpaceIndex === -1) {
      setText('');
    } else {
      let newText = text.slice(0, lastSpaceIndex);
      setText(newText);
    }
  };

  const handlremoveextraspace = () => {
    let cleanedText = text.replace(/\s+/g, ' ').trim();
    setText(cleanedText);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white',color:  props.mode === 'dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handlCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-1" onClick={handlbackspace}>
          Remove whole word
        </button>
        <button className="btn btn-primary mx-1" onClick={handlremoveextraspace}>
          Remove extra space
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.08 * text.split(' ').length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it  hare"}</p>
      </div>
    </>
  );
}
