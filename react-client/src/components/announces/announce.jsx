import React from "react";
import $ from "jquery";
import Ratings from './Rating.jsx'
import NavBar from '../nav.jsx';

class Announce extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {},
    }
  }

  componentWillMount() {
    let id = window.location.pathname.split('/')[1]
    $.ajax({
      url: '/update/views',
      method: 'PATCH',
      data: { id }
    })
      .then(res => this.setState({ info: res }))
  }

  render() {
    const elem = Math.floor(this.state.info.rating);
    const stars = [];
    let count = 0;
      for (let i =0; i < 5; i++) { 
        if (count !== elem) {
          stars.push(<span key={i} className="fa fa-star checked" style={{color: 'gold'}}></span>); 
          count++;
        }else {
          stars.push(<span className="fa fa-star" style={{color: 'lightGray'}}></span>)
        } 
      }

    return (
      <div>
          <NavBar />
            <div className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <div className='br b--black-50'>
            <img
            className="w2 h2 w4-ns h4-ns br2"
            src="http://tachyons.io/img/avatar-jasonli.jpg"
            />
            <span className="f2 db black-70 pa2">
              {this.state.info.firstName} {this.state.info.lastName}
            </span>
            </div>
            <div className=" pl3 center ph5 ">
              <span className="f1 db black-70 pa2">
                {this.state.info.categorie}
              </span>

              <span className='f4 db black-70 pa2'>
                {this.state.info.region}
              </span>
              <span className='f5 db black-70 pa2'>
                {this.state.info.description}
              </span>
            </div>
            <div className='fr'>
            <h3>
            {this.state.info.price} DT
            </h3>
            {stars}
            <h3>Rate me</h3>
            <Ratings data={this.state.info} />
            </div>
            </div>           
      </div>
    )
  }
}
export default Announce;




