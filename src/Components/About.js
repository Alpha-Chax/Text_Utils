import React from 'react'

function About(props) {
      let myStyle ={
        color :props.mode==='dark'? 'white': 'black',
        backgroundColor :props.mode==='dark'? '#0e5a71d6': 'white',
      }   

  return (
    <div className="Container" style={{color : props.mode==='dark'? 'white': 'black'}}>
        <h2 className='my-3'>About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze Your Text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       TextUtils gives you a way to analyze your text quickly and efficiently. Be it Word Count, Character Count or text operations and speak out your text loud with speechSynthesis API if you want to listen to a document or listen to an E-book.   
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and Characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, excel document, pdf document, essays, etc.  
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
