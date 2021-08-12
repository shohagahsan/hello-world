import React, { Component } from 'react';
import Book from '../representational/Book';

class Booklist extends Component {
    constructor(props) {
        super(props);
        console.log("Booklist constructor");
    }

    componentDidMount() {
        console.log("Booklist componentDidMounts");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Booklist shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    componentDidUpdate() {
        console.log("U Booklist componentDidUpdate");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("U Booklist getDerivedStateFromProps", nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log("Booklist getSnapshotBeforeUpdate");
    }

    render() {
        console.log("Booklist render");
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        delete={() => this.props.changeBookState(index)}
                        key={book.id}
                        inputName={(event) => this.props.changeByInput(event, index)}
                    />
                )
            })
        )
    }
}

export default Booklist;