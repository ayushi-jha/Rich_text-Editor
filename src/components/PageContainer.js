import React from 'react'
import ReactDOM from 'react-dom'
import {Editor, EditorState} from 'draft-js';

class PageContainer extends React.Component {
  
	constructor(props){
		super(props);
		this.state = {editorState: EditorState.createEmpty()}
	}

	onChange = (editorState) => {
		this.setState({editorState})
	}
  render() {
  	return(
  	<div><Editor 
  	editorState = {this.state.editorState}
  	onChange = {this.onChange}
  	/></div>)
  }
}
ReactDOM.render(
  <PageContainer />,
  document.getElementById('container')
);
export default PageContainer