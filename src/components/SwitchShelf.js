import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SwitchShelf extends Component {

  render() {
    const { book, books, updateShelf } = this.props;
    let currentShelf = 'none';

    for (let item of books ) {
      if (item.id === book.id)  {
        currentShelf = item.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={(event) => updateShelf(book, event.target.value)}
          defaultValue={ currentShelf }>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

SwitchShelf.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}


export default SwitchShelf;
