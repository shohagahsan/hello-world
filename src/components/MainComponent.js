import React, { Component } from 'react';
import Booklist from './lists/Booklist';
import booklist from '../assets/books';
import NewBook from './representational/NewBook';
import BookDetail from './representational/BookDetail';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booklist,
      selectedBook: null
    }
  }

  selectedBookHandler = bookId => {
    const book = this.state.books.filter(book => book.id === bookId)[0]
    this.setState({
      selectedBook: book
    })
  }

  render() {
    // const bookState = this.state.books;


    const books = <Booklist
      books={this.state.books}
      selectedBookHandler={this.selectedBookHandler}
    />

    return (
      <div className="App">
        <div className="nav-bar">
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/new-book">New Book</NavLink></li>
          </ul>
        </div>
        <Switch>
          <Route path="/books" exact render={() => books} />
          <Route path="/new-book" exact component={NewBook} />
          <Route path="/:id" render={() => <BookDetail book={this.state.selectedBook} />} />
          <Redirect from="/" to="/books" />
        </Switch>
      </div>
    );
  }
}

export default MainComponent;