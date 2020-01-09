import React from 'react';

const Teacher = ( {id, name, category, email} ) => {
	return(
		<div className='tc bg-light-purple dib br2 pa3 ma2 grow bw2 shadow-8'>
			<div key={id}>
				<h2>{name}</h2>
				<h3>{category}</h3>
				<p>{email}</p>
			</div>
		</div>
		)
}

export default Teacher;