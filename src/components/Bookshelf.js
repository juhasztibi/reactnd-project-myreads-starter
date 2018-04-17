import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
  render() {

    const {shelfTitle, books} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books && books.length ?
              books.map((book, index) => {
                <Book key={index} title={book.title} authors={book.authors} />
              }) :
              <div className="bookshelf--isEmpty">No books here</div>
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
