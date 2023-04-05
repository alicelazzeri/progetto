import { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class AddComment extends Component {
  state = {
    commentObj: {
      comment: "",
      rate: "1",
      elementId: this.props.asin,
    },
  };
  sendComment = async e => {
    e.preventDefault();
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state.commentObj),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmQ4NmY4MWI0MjAwMTM5YjI3ZGUiLCJpYXQiOjE2ODA1MjQxNTQsImV4cCI6MTY4MTczMzc1NH0.H-eOaHcc8xAYIrtJhZ1vvuLziVdP-5FhK9CJ0S0rQzA",
        },
      });
      if (response.ok) {
        alert("Your comment was sent!");
        this.props.request();
        this.setState({
          commentObj: {
            comment: "",
            rate: "1",
            elementId: this.props.asin,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-between">
          <Col>
            <Form onSubmit={this.sendComment}>
              <Form.Group
                className="mb-3"
                controlId="comment"
                value={this.state.commentObj.comment}
                onChange={e => this.setState({ comment: e.target.value })}
              >
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write your comment here"
                  value={this.state.commentObj.comment}
                  onChange={e => this.setState({ commentObj: { ...this.state.commentObj, comment: e.target.value } })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rate the book:</Form.Label>
                <Form.Select
                  value={this.state.commentObj.rate}
                  onChange={e => this.setState({ commentObj: { ...this.state.commentObj, comment: e.target.value } })} // con lo spread aggiungo mantenendo quello che c'è in precedenza
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </Form.Group>
              <Button type="submit" variant="warning">
                Submit
              </Button>
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
