import React, { Component } from 'react';

class Book extends Component {

	constructor() {
		super();

		this.state = {
			self: null
		}
	}

	render() {

		const {title, authors, image} = this.props;

		return (
			<div className="book">
				<div className="book-top">
					{image ?
						<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${image}")` }}></div>
					: null }
					<div className="book-shelf-changer">
						<select>
							<option value="none" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">
					{authors && authors.length ?
						authors.map((author, index) => {
							return <div key={index}>{author}</div>
						}) : null
					}
				</div>
			</div>
		)
	}
}

export default Book;
