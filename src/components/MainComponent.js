import React, { Component } from 'react';
import Booklist from './lists/Booklist';
import booklist from '../assets/book';

class MainComponent extends Component {
  state = {
    books: booklist,
    showBooks: true
  };


  changeByInput = (event, index) => {
    const book = {
      ...this.state.books[index]
    }
    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book;

    this.setState({ books: books });
  }

  changeBookState = index => {
    // const books = this.state.books.slice();
    // const books = this.state.books.map(index => index);
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books: books
    });
  };

  toggleBooks = () => {
    this.setState({ showBooks: !this.state.showBooks });
  }

  render() {
    const style = {
      border: "5px solid red",
      margin: "10px auto",
      padding: "20px",
      borderRadius: "10px",
      background: "green",
      color: "white"
    };
    // const bookState = this.state.books;

    let books = null;
    if (this.state.showBooks) {
      books = <Booklist
        books={this.state.books}
        deleteBookState={this.changeBookState}
        changeByInput={this.changeByInput}
      />
    }

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.toggleBooks}>Toggle Books</button>
        {books}
      </div>
    );
  }
}

export default MainComponent;