import React, { Component } from 'react';
import { teachers } from './teachers.js';
import SearchList from './SearchList.js'

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teachers: teachers
		}
	}
	render() {
    return(
    	<SearchList teachers={this.state.teachers} />
      )
	}
}

export default Search;


