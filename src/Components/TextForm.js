import React,{useState} from "react";

function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase Was Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase", "success")
    }
    const handleLoClick = () =>{
        console.log("Lowercase Was Clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase", "success")
    }
    const handleClear = () =>{
        console.log("Clear Text Was Clicked " + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared !!", "success")
    }

    const handleCopy =() =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied To Clipboard", "success")
    }

    const handleAaClick = () =>{
        console.log("Make first letter capital Was Clicked " + text);
        let words = text.split(" ");
        let joinedWords = [];
        let capWord;
        
        words.forEach(function (element){
            if(element[0] !== undefined ){
                capWord = element[0].toUpperCase() + element.slice(1).toLowerCase();
                joinedWords += capWord + ' '; 
            }
        })
        setText(joinedWords);
        props.showAlert("Converted To Aa Format", "success")
     }
    

    

    const speak = () => {
        console.log("Speak out text Loud ");
       let voices = window.speechSynthesis.getVoices()
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.voice = voices[3];
        msg.rate = 0.8;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking Text Out Loud", "success")
      }
    const pauseSpeak = () => {
        console.log("Pause speaking text ");
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.pause(msg);
        props.showAlert("Speech Paused", "warning")
      }
    const resumeSpeak = () => {
        console.log("Resume speaking text ");
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.resume(msg);
        props.showAlert("Speech Resumed", "success")
      }
    const stopSpeak = () => {
        console.log("Stop speaking text ");
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.cancel(msg);
        props.showAlert("Speech Stoped !", "danger")
      }
    

    const handleOnChange = (evt) =>{
        console.log("On Change");
        setText(evt.target.value)
    }

    const [text, setText] = useState ('');
  return (
    <>
      <div className="container" style={{color : props.mode==='dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'? 'grey': 'white',
        color: props.mode==='dark'? 'white': 'black', cursor :"pointer"}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-dark mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-dark mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-success mx-2" onClick={handleAaClick}>Capitalize first letter (Aa) </button>
        <button  className="btn btn-primary mx-2 my-2" type="submit" onClick={speak}>Speak Text</button>
        <button  className="btn btn-warning mx-2 my-2" type="submit" onClick={pauseSpeak}>Pause Speaking</button>
        <button  className="btn btn-success mx-2 my-2" type="submit" onClick={resumeSpeak}>Continue Speaking</button>
        <button  className="btn btn-danger mx-2 my-2" type="submit" onClick={stopSpeak}>Stop Speaking</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'? 'white': 'black'}}>
        <h2>Your Text Summary</h2>
        <p >{((text.trim().split(" ")).filter(function (element) {
                    return element !== "";
                })).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length } average minutes to read text</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter something in the textbox above to Preview it here"}</p>
    </div>
    </>
  );
}

export default TextForm;
