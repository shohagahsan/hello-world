import React, { Component } from 'react';
import Booklist from './lists/Booklist';
import booklist from '../assets/books';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booklist,
      showBooks: true
    }
    console.log("MainComponent constructor");
  }


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

  componentDidMount() {
    console.log("MainComponent componentDidMounts");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("U MainComponent shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentDidUpdate() {
    console.log("U MainComponent componentDidUpdate");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("U MainComponent getDerivedStateFromProps", nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log("MainComponent getSnapshotBeforeUpdate");
  }

  render() {
    console.log("MainComponent render");
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
        changeBookState={this.changeBookState}
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