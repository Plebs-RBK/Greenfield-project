import React, { Component } from "react";
import Teacher from "./Teacher.jsx";
import $ from "jquery";
import NavBar from '../nav.jsx';

//returns a boolean output (if query matches name OR do nothing if no query)
function searchFilter(searchQuery) {
  return function (a) {
    return (
      a.region.toLowerCase().includes(searchQuery.toLowerCase()) || !searchQuery
    );
  };
}
class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      categorie: "",
      searchQuery: ""
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }
  async componentDidMount() {
    let categorie = window.query;
    await this.getAnnounces(categorie)
  }
  getAnnounces(categorie) {
    $.get(`/announces/${categorie}`).then(res => {
      this.setState({ teachers: res });
    });
  }
  async onSubmit(event) {
    event.preventDefault();
    let categorie = this.state.categorie;
    await this.getAnnounces(categorie)
  }
  inputHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { teachers, searchQuery, categorie } = this.state;
    return (
    <div>
        <NavBar />
      <main className="pa4 white center " style={{ position: 'absolute', top: '25%', right: '50%', transform: 'translate(50%, -25%)', opacity: '1'}}>
        <input type="text" name="searchQuery" onChange={this.inputHandler} value={searchQuery} placeholder="Search by region" /><br />
        <input type="tesxt" name="categorie" onChange={this.inputHandler} value={categorie} placeholder="Search by categorie" />
        <button type='submit' onClick={this.onSubmit}>Search</button>


<section className="cf pt4 pb2 mw8 center">
          {
            teachers.filter(searchFilter(searchQuery)).map(elm => (
              <div key={elm._id} >
                  <Teacher data={elm} />
              </div>
            ))}
        </section>
      </main>
    </div>
    );
  }
}
export default SearchList;



{/*<article>
<h2 className="f3 fw4 pa3 mv0">
Albums
</h2>
<div className="cf pa2">

  

</div>
</article>*/}