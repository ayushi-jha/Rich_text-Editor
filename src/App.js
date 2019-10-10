import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Editor, EditorState, RichUtils, ContentState} from 'draft-js';
import ReactDOM from 'react-dom';

// Function to count the number of words in the text box.
    function view_count (text) {
        // Find html elements.
        
        var i = 0;
    //remove whitespace before and after end of text
    text = text.replace(/(^\s*)|(\s*$)/gi,"");
    // replace newline if it occurs at least once with single whitespace
    text = text.replace(/\n{1,}/gi," ");
    // replace whitespace if it occurs at least twice with single whitespace
    text = text.replace(/\s{2,}/gi," ");
    var words = text.split(" ");
    var len = 0;
    for (i = 0 ; i < words.length; i++)
    {
      if (words[i] != " " && words[i] != ""){
      len += 1 ;
       }
    }
    //if (text != undefined)
    document.getElementById("marks").innerHTML = "Words: " + len + " ";
    
    if ( len >= 50000 ) {
      document.getElementById ("marks").innerHTML += "You did it! You hit the 50000 words mark! Congratulations!";
    }
    else if ( len >= 40000 ) {
      document.getElementById ("marks").innerHTML +=  "You hit the 40000 words mark. Awesome!";
    }
    else if ( len >= 25000 ) {
      document.getElementById ("marks").innerHTML +=  "You hit the 25000 words mark. Nice work!";
    }
    else if ( len >= 10000 ) {
      document.getElementById ("marks").innerHTML +=  "You hit the 10000 words mark. Keep it up!";
    }
    else if ( len >= 5000 ) {
      document.getElementById ("marks").innerHTML +=  "You hit the 5000 words mark. Congrats!";
    }
    else if ( len >= 1667 ) {
      document.getElementById ("marks").innerHTML +=  "You hit the 1667 words mark. Great job for today!";
    }
    else
      document.getElementById ("marks").innerHTML +=  "";
    // To keep updating the word count by calling the function repeatedly
   // setTimeout(view_count, 1000);
    
    return len;
  }
  // View Count function ends.


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createWithContent(ContentState.createFromText("Hello There! \n Start typing here to get started. Use Ctrl/Cmd shortcuts for Bold, Italics, Underline etc."))
  };
  }
  componentDidMount(){
    setTimeout(() => {
      
      
    }, 1000)
    
  }
  onChange = (editorState) => {

    this.setState({editorState});
              const x = editorState.getCurrentContent().getPlainText('\u0001')

    console.log(view_count(x));
  }
  handleKeyCommand = (command) => {const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  render() {
    return (
      <div id="content">
        <h1>Draft.js Editor</h1>
        <p> Use shortcuts ex. Ctrl/Cmd+B, Crtl/Cmd+U etc. for formatting text while you type.</p>
        <div id="marks"></div>
         <div id = "editbox" className="editor">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand = {this.handleKeyCommand}
          />
        </div>
      </div>
    );
  }
}

