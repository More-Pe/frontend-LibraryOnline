import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Books = () => {

	const [books, setBooks] = useState([])

	useEffect(() => {
		console.log("UseEffect");
		fetch("http://localhost:4000/books")
		.then(res=> {
            return res.json();
		})
		.then(res=> {
			setBooks(res.data);
			console.log(res);
		})
		.catch(e => {
		    console.log(res);
		});
	},
[]
);

	return (
		<>
		{
			books.map( (book) => {
				return book.title;
			})
		}
		</>
);
};
