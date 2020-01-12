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
    const stars = []
    for (let i =0; i < elem; i++) { stars.push(<span key={i} className="fa fa-star checked" style={{color: 'orange'}}></span>) }

    return (
      <div>
        <NavBar />
          <div className=''>
          <main className=" list pl0 mt0 measure center pa4 " style={{ position: 'absolute', top: '25%', right: '50%', transform: 'translate(50%, -7.5%)' }}>
            <div className="flex justify-center lh-copy pa3 ph0-l ba b--black-10 pa3">
            <img
            className="w2 h2 w4-ns h4-ns br2"
            src="http://tachyons.io/img/avatar-jasonli.jpg"
            />

            <div className="pl3 flex-auto ph5">
              <span className="f3 db black-70">
                {this.state.info.categorie}
              </span>
              <span className="f6 db black-70">
                {this.state.info.firstName} {this.state.info.lastName}
              </span>
              <span className='f6 db black-70'>
                {this.state.info.region}
              </span>
              <span className='f6 db black-70'>
                {this.state.info.description}
              </span>
            </div>

            <div>
            <h3>
            {this.state.info.price} DT
            </h3>
            {stars}
            <h3>Rate me</h3>
            <Ratings data={this.state.info} />
            </div>
            </div>           
            </main>
        </div>
      </div>
    )
  }
}
export default Announce;



// <main className="pa4 tc" style={{ position: 'absolute', top: '25%', right: '50%', transform: 'translate(50%, -7.5%)' }}>
//               <article className="bg-white center mw5 ba b--black-10 mv4">
//               <div className="pv2 ph3">
//               <h3 className="f6 ttu tracked">
//               <img
//                 src="http://ern-dubai.com/wp-content/uploads/2019/04/facebook-anonymous-app.jpg"
//                 className="w-100 db"
//                 alt="profile pic"
//               />
//               {this.state.info.categorie}
//               </h3>
//               <h3>{this.state.info.firstName} {this.state.info.lastName}</h3>
//               <small className='gray db pv2'>
//               <h3>{this.state.info.region}</h3>
//               </small>
//               </div>
//             <img src="https://i.ibb.co/y66jsDJ/data-k-IJ8-Swob7c-Sf3-hpou5v-LQj-8w-Lh-Scfaljq7-TFY3zvw75-Xvp-M4k-Ouw1xy-T2-Sf-Bzod-LLTBq-IXumz-DWXu-NXRE-WBgb-Lt-NQESd-Z2-Cvoe3050pb-u-AY7qd-NXYHv-Nob-L3-BAlk8c-GDor-AQww-M94-XRr-PFK6-GWWMJu-LO4-kj0kp-Ssmmg-R-TPTit-CXme-TGQ9k-REll-Ybf-Zy8-ZEppn5-Wx4-5z-XWET.png"/>
//               <div className="pa3">
//               <h3 className='dim lh-title'>{this.state.info.description}</h3>
//               <small className="gray db pv2">
//               {this.state.info.price} DT
//               </small>
//               <h3>{this.state.info.rating} Stars</h3>
//                <Ratings data={this.state.info} />
//               </div>
//               </article>
//             </main>