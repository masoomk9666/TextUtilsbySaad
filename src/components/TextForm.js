import React, {useState} from 'react'


export default function TextForm(props) {
  const handleOnChange = (event)=>{
    // console.log("On Change Function");
    setText(event.target.value);
  }
  const handleUpClick = ()=>{
    // console.log("handleUpClick" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }
  const handleLoClick = ()=>{
    // console.log("handleUpClick" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  }
  const handleClear = ()=>{
    // console.log("handleUpClick" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }

  const handleSpeak = ()=>{
    // console.log("handleUpClick" + text);
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking the text", "success");
  }
  const handleCopy = ()=>{
    // console.log("handleUpClick" + text);
    let text = document.getElementById('myBox');
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard", "success");
  }
  const handleExtraSpaces = ()=>{
    let newText1 = text.split(/[ ]+/)
    setText(newText1.join(' '))
    props.showAlert("Extra Spaces Removed", "success");
  }
  const[text , setText] = useState("Enter Your Text Here");
  //text = "new text"; // Wrong way to change state
  //setTaxt("new text"); //Write way to change state
  return (
    <>
    <div className='container' style={{color :props.mode==='dark'?'white':'black'}}>
      {/* <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">Email address</label>
         <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div> */}
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042737':'white', color :props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleClear} >Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleSpeak} >Speak</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color :props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length-1} words , {text.length} charactors</p>
        <p>Reading Time : {0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text :'Enter something in the box above to preview it here'}</p>
    </div>
    </>
  )
}
