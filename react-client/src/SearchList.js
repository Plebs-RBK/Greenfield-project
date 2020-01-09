import React, { Component } from 'react';
import Teacher from './Teacher.js';

//returns a boolean output (if query matches name OR do nothing if no query)
function searchFilter(searchQuery) {
	return function(a) {
		return a.name.toLowerCase().includes(searchQuery.toLowerCase()) || !searchQuery;
	}
}
class SearchList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teachers: props.teachers,
      searchQuery: ''
		}
		this.inputHandler = this.inputHandler.bind(this);
	}
	inputHandler(event) {
		this.setState({searchQuery: event.target.value});
	}
	render() {
		const { teachers, searchQuery } = this.state;
		return(
			<div>
			<form>
				{/*changes the state searchQuery*/}
				<input type="text" onChange={this.inputHandler} value={searchQuery}/>
			</form>
        <div>
          {
            teachers.filter(searchFilter(searchQuery)).map( teacher =>
            	<Teacher 
            	id={teacher.id}
            	name={teacher.name}
            	category={teacher.catergory}
            	email={teacher.email}
            	/>
            )
          }
	      </div>
			</div>
			)
	}
} 
export default SearchList;