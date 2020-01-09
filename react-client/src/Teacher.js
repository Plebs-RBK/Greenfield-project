import React from 'react';


const Teacher = ( {id, name, category, email} ) => {
	return(
		<div>
			<div key={id}>
				<h2>{name}</h2>
				<h3>{category}</h3>
				<p>{email}</p>
			</div>
		</div>
		)
}

export default Teacher;