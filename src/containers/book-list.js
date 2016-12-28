'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item"> {book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// Below function connects React to Redux.
function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

// Exporting the mapState function above, which connects
export default connect(mapStateToProps)(BookList);