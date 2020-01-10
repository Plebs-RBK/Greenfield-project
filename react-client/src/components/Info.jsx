import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Carte from './Carte.jsx'
import Rating from './Rating.jsx'

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
        <h3>{this.state.info.firstName} {this.state.info.lastName}</h3>
        <h3>{this.state.info.region}</h3>
        <h3>{this.state.info.price} DT</h3>
        <Rating />
      </div>
    )
  }
}
export default Info;