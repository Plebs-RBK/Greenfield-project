import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Carte from './Components/Carte.jsx';


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
        <Carte />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
