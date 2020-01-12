import React from "react";
import { Redirect } from 'react-router-dom';

class Teacher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  changeState(e) {
    this.setState({ clicked: true })
  }
  RenderTheComponant() {
    return <Redirect to={`/${this.props.data._id}`} />
  }
  render() {
    return (
     <div className="fl w-50 w-25-m w-20-l pa2">

        <div
          id={this.props.data._id}
          onClick={this.changeState.bind(this)}
          className="bg-light-blue dib br3 pa2 ma2 grow bw2 shadow-5 vh-30 mw5-m"
          style={{ width: "100px" }}
        >
    <a
      href="#"
      className="db link dim tc"
    >
    <img
      src="http://tachyons.io/img/avatar-jasonli.jpg"
      alt="Profile img"
      className="w-100 db outline black-10"
    />
    <dl className="mt2 f6 lh-copy">
    <dt className="clip">
    Name
    </dt>
    <dd className="ml0 black truncate w-100">
    {this.props.data.firstName}
    </dd>
    <dt className="clip">
    Categorie
    </dt>
    <dd className="ml0 gray truncate w-100">
    {this.props.data.categorie}
    </dd>
    </dl>
    </a>
</div>
    {this.state.clicked && this.RenderTheComponant()}
  </div>
    );
  }
}
export default Teacher;


{/*   <div>
        <div
          id={this.props.data._id}
          onClick={this.changeState.bind(this)}
          className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 vh-30 mw5-m"
          style={{ width: "250px" }}
        >
          <h2>{this.props.data.firstName}</h2>
          <h3>{this.props.data.categorie}</h3>
          <h1>{this.props.data.price} DT</h1>
          <p>{this.props.data.description}</p>
        </div>
        {this.state.clicked && this.RenderTheComponant()}
      </div>*/}