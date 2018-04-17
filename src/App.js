import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Book from './components/Book';
import Bookshelf from './components/Bookshelf';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class BooksApp extends React.Component {

  constructor() {
    super();
    this.state = {
      /**
      * TODO: Instead of using this state variable to keep track of which page
      * we're on, use the URL in the browser's address bar. This will ensure that
      * users can use the browser's back and forward buttons to navigate between
      * pages, as well as provide a good URL they can bookmark and share.
      */
      showSearchPage: false,
      searchResult: []
    }

    this.search = this.search.bind(this);
  }

  componentDidMount() {

  }

  search(query) {
    if (query.target.value != null) {
      BooksAPI.search(query.target.value).then(books => this.setState({
        searchResult: books
      }));
    }

    console.log(this.state.searchResult);

  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" placeholder="Search by title or author" onKeyUp={this.search} />

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {this.state.searchResult.length ? this.state.searchResult.map((book) => (
                    <Book
                      key={book.id}
                      authors={book.authors}
                      title={book.title}
                      image={book.imageLinks.thumbnail}
                    />
                  )) : null}
                </ol>
              </div>
            </div>
          ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Bookshelf shelfTitle={"Currently Reading"} books={{}} />
                <Bookshelf shelfTitle={"Want to Read"} books={{}} />
                <Bookshelf shelfTitle={"Read"} books={{}} />
                <div className="open-search">
                  <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }
  }

  export default BooksApp
