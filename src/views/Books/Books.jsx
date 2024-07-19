import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CCard } from '../../components/CCard/CCard';

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
			{books.map((book, index) => (
				<CCard key={index} name={book.title} description={book.description} cardId={book.id} />
			))}
		</>
	);
}; 
