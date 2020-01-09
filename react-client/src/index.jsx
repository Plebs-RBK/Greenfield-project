import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Search from './Search.js';
// import SelectOption from './SelectOption.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }


  render() {
    return (
      
      <Search />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
