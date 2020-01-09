import React, { Component } from 'react';
import { teachers } from './teachers.js';
import SearchList from './SearchList.js'

class Search extends Component {
constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      teachers: teachers
    };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }


    onSubmit(event) {
    event.preventDefault();
    console.log(this.state.searchInput)
 
  }
  onChange(event) {
    console.log(event.target.value)
    this.setState( {searchInput: event.target.value} )
  }

  render() {
    return (
      <div>
        <div className='mainSearch'>
        
        <form onSubmit={this.onSubmit}>

                <select id="region" onChange={this.onChange}>
                    {
                      this.state.teachers.map( teacher =>
                        <option value={teacher.catergory}>{teacher.category}</option>
                      )
                    }
                </select>

                  <button type='submit' >Search</button>
          </form>

            </div>
        {/*<SearchList teachers={this.state.teachers} />*/}
      </div>
    );
  }
}
export default Search;











