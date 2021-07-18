import React from 'react';
import ReactPlayer from "react-player";
 
class App extends React.Component {
	// constructor(name) {
	// 	this.url = name
	// }
	render() {
		  return (
      <ReactPlayer
        url={this.props.url}
        controls/>
  );

	}
}

export default App;



 




