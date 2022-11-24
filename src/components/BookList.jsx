import { ListGroup } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";
import Books from '../data/fantasy.json'

class BookList extends Component {

    state = {
        books: Books
    }

    render() {

        return(
            <ListGroup className="d-flex flex-wrap flex-row justify-content-center">
                {this.state.books.map(book => (
                    <SingleBook title={book.title} img={book.img}></SingleBook>
                ))}
            </ListGroup>
        )
    }
}

export default BookList;