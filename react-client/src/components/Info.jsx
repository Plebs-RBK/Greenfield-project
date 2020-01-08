import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Carte from './Carte.jsx'

class Info extends React.Component {
  constructor(props) {
    super(props)


  }
  switchVue(){

  }

  render(){
    return (

      <div>

        <h1>{this.props.data[0].username}</h1>
        <h1>{this.props.data[0].region}</h1>
        <h1>{this.props.data[0].price} DT</h1>

        {/* {console.log(this.props.data)}
        {
          this.props.data.map(element => {
            <div id={element.categorie}>
              <div><h3>Name:</h3>{element.username}</div>
              <div><h3>Region:</h3>{element.region}</div>
              <div><h3>Price:</h3>{element.price}</div>
            </div>
          })
        } */}
      </div>
    )
  }
}
export default Info;