import React from 'react';
import PropTypes from 'prop-types';
import SwitchShelf from './SwitchShelf';

const Book = (props) => {

  const { book, books, updateShelf } = props;
  const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "";
  const title = book.title ? book.title : "No title available";

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage: `url(${coverImg})`}}>
          </div>
          <SwitchShelf
            book={book}
            books={books}
            updateShelf={updateShelf}
          />
        </div>
        <div className="book-title">{ title }</div>
        {book.authors && book.authors.map((author, index) => (
          <div className="book-authors" key={index}>{author}</div>
        ))}
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default Book;
