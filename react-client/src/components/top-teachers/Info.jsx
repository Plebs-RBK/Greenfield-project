import React from "react";
import $ from "jquery";
import { Redirect } from 'react-router-dom';

class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: this.props.data[0],
      counter: 1,
      clicked: false,
      redirect: ""
    }
    this.sendID = this.sendID.bind(this);
  }

  componentWillMount() {
    setInterval(() => {
      if (this.state.counter === 3) {
        this.setState({ counter: 0 })
      }
      this.setState({
        info: this.props.data[this.state.counter],
        counter: this.state.counter += 1
      })
    }, 5000)
  }

  sendID() {
    this.setState({ clicked: true })
  }
  RenderTheComponant() {
    return <Redirect to={`/${this.state.info._id}`} />
  }

  // star() {
  //   let parent = []
  //           let children = []
  //         for(let i = 0; i < this.state.info.rating; i++) {
  //           children.push()
  //           return <span className="fa fa-star checked" style={{color: 'orange'}}></span>
  //           console.log('stars')
  //         }
  // }

  render() {
    const elem = Math.floor(this.state.info.rating);
    const stars = []
    for (let i =0; i < elem; i++) { stars.push(<span key={i} className="fa fa-star checked" style={{color: 'orange'}}></span>) }
    return (
      <div onClick={this.sendID}>
        <h3>{this.state.info.firstName} {this.state.info.lastName}</h3>
        <h3>{this.state.info.region}</h3>
        <h3>{this.star}</h3>
 
          {stars}
      
{/*        <h3>{this.state.info.rating} Stars</h3>*/}
        {this.state.clicked && this.RenderTheComponant()}
      </div>
    )
  }
}
export default Info;