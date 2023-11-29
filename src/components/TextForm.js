import React,{useState} from "react";


export default function TextForm(props) {
const handleUpClick= ()=>{
    console.log("UpperCase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
}
const handleLoClick= ()=>{
  console.log("LowerCase was clicked"+ text);
  let newText = text.toLowerCase();
  setText(newText);
}
const handleOnChange= (event)=>{
    console.log("On Change");
    setText(event.target.value);
}
const handleSpeakChange= (event)=>{
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
    <div className = "container" style = {{color:props.mode==='dark'?'white':'#0a0a33'}}>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <label htmlFor="myBox" class="form-label">
          Example textarea
        </label>
        <textarea className="form-control" value = {text} id="myBox" style = {{backgroundColor:props.mode==='dark'?'grey':'white'}} rows="5" onChange = {handleOnChange}></textarea>
      </div>
      <button  className="btn btn-primary mx-2 my-2 "  onClick = {handleUpClick}>Convert To UpperCase</button>
      <button  className="btn btn-primary mx-2 my-2 "  onClick = {handleLoClick}>Convert To LowerCase</button>
      <button  className="btn btn-primary mx-2 my-2"  onClick = {handleSpeakChange}>Speak</button>
      <div className="container my-3" style = {{color:props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>hi i am shruti</p>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>PREVIEW</h2>
        <p>{text}</p>
      </div>
      </div>

    </>
  );
}
