import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
