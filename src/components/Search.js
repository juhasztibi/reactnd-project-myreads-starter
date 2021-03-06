import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      newBooks: [],
      searchError: false
    }

    this.getBooks = this.getBooks.bind(this);
  }

  getBooks = (event) => {

    console.log('search')

    const searchQuery = event.target.value;

    if (searchQuery) {
      this.setState({ query: searchQuery });

      BooksAPI.search(searchQuery, this.props.searchLimit).then((books) => books.length > 0 ? this.setState({newBooks: books, searchError: false }) : this.setState({ newBooks: [], searchError: true }));
    } else {
      this.setState({
        newBooks: [],
        searchError: false,
        query: ''
      });
    }
  }

  render() {

    const { query, newBooks, searchError } = this.state;
    const { books, updateShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.getBooks} />
          </div>
        </div>
        <div className="search-books-results">
          { newBooks.length > 0 && (
            <div>
              <div className=''>
                <h3>Search returned { newBooks.length } books </h3>
              </div>
              <ol className="books-grid">
                {newBooks.map((book) => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    updateShelf={updateShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          { searchError  && (
            <div>
              <div className=''>
                <h3>Search returned 0 books. Please try again!</h3>
                </div>
              </div>
          )}
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default Search;
