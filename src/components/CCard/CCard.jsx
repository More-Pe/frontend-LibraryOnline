import React from 'react';

export const CCard = ({name, description}) => {
	return (
		<>
			<div className='card'>
				<h1> { name } </h1>
				<p> { description }</p>
			</div>
		</>
	);
};
