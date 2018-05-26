import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class BookList extends Component {

  render() {
    const { books, updateShelf } = this.props;
    const shelfTypes = [
      { type: 'currentlyReading', title: 'Currently Reading' },
      { type: 'wantToRead',  title: 'Want to Read' },
      { type: 'read', title: 'Read'}
    ];

    return (
      <div className="list-books-content">
        {shelfTypes.map((shelf, index) =>  {
          const shelfBooks = books.filter( book => book.shelf === shelf.type)
          return  (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{ shelf.title }</h2>
              <div className="bookshelf-books">
                <BookShelf
                  books={shelfBooks}
                  updateShelf={updateShelf}
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default BookList;
