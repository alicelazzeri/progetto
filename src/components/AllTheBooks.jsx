import { Component } from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import books from "../books/horror.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container fluid style={{ backgroundColor: "#d9a162" }}>
        <h2 className="fw-light py-5">Here is our collection of Horror novels 🧟‍♀️</h2>
        <Row xs={1} sm={2} md={3} lg={4}>
          {books.map((book, index) => (
            <Col key={index} className="pb-5 px-5">
              <Card id="card">
                <Card.Img className="img-fluid" variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>
                    <Badge className="p-2 my-2" bg="warning">
                      {book.price} €
                    </Badge>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
