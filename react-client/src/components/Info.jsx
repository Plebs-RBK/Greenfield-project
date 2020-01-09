import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Carte from './Carte.jsx'

class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      info:this.props.data[0],
      counter : 1
    }

  }
  componentWillMount(){
    setInterval(()=>{
      if(this.state.counter === 3){
        this.setState({counter : 0})
      }
      this.setState({
        info : this.props.data[this.state.counter],
        counter : this.state.counter += 1
      })
    },5000)
  }

  render(){
    return (

      <div>

        <h3>{this.state.info.username}</h3>
        <h3>{this.state.info.region}</h3>
        <h3>{this.state.info.price} DT</h3>

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