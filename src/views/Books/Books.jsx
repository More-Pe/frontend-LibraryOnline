import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Books = () => {
	const [books, setBooks] = useState([]); //cuidado, esto es solo para arrays

	useEffect(() => {
		console.log('UseEffect');
		fetch('http://localhost:4000/books')
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setBooks(res.data);
				console.log(res);
			})
			.catch((e) => {
				console.log(res);
			});
	}, []);

	return (
		<>
			{books.map((book) => (
				<div key={book.id} className='card'>
					<h1> {book.title} </h1>
					<p> {book.description}</p>
				</div> //está todo envuelto en un div porque puede renderizar un solo elemento
			))}
		</>
	);
};
