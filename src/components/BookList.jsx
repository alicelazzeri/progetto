import { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  FilterBookList = () => {};
  render() {
    return (
      <>
        <h2 className="fw-light pt-5">Here is our collection of Horror novels 🧟‍♀️</h2>
        <Form className="py-2 w-50 mx-4">
          <Form.Group className="mb-3" controlId="searchForm">
            <Form.Control type="text" placeholder="Search books" />
          </Form.Group>
        </Form>

        <Row xs={1} sm={2} md={3} lg={4}>
          {this.props.books.map(book => (
            <Col key={book.asin} className="pb-5 px-5">
              <SingleBook img={book.img} title={book.title} price={book.price} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
