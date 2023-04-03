import { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };
  render() {
    return (
      <Container>
        <h5 className="fw-bold text-center">Write you comment here:</h5>
        <Row className="justify-content-between">
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="comment"
                value={this.state.comment}
                onChange={e => this.setState({ comment: e.target.value })}
              >
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Write your comment here" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rate the book:</Form.Label>
                <Form.Select value={this.state.rate} onChange={e => this.setState({ rate: e.target.value })}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="comment"
                value={this.state.elementId}
                onChange={e => this.setState({ elementId: e.target.value })}
              >
                <Form.Label>Element Id </Form.Label>
                <Form.Control type="text" placeholder="Write the element id here" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddComment;
