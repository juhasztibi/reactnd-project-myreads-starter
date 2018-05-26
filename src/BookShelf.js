import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {

  render() {
    const { books, updateShelf } = this.props;

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            book={book}
            books={books}
            key={book.id}
            updateShelf={updateShelf}
          />
        ))}
      </ol>
    )
  }

}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default BookShelf;
