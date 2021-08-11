import React from 'react';
import Book from '../representational/Book';

const Booklist = props => {
    return (
        props.state.books.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                    delete={() => props.changeBookState(index)}
                    key={book.id}
                    inputName={(event) => props.changeByInput(event, index)}
                />
            )
        })
    )
}

export default Booklist;