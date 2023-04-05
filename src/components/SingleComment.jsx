import { Component } from "react";
import { Badge, ListGroupItem } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    return (
      <ListGroupItem className="d-flex justify-content-between">
        <span className="me-auto text-truncate">{this.props.author}</span>
        <span>{this.props.comment}</span>
        <span>
          Rate:<Badge bg="warning">{this.props.rate}</Badge>
        </span>
      </ListGroupItem>
    );
  }
}

export default SingleComment;
