import { Component } from "react";
import { Badge, ListGroupItem } from "react-bootstrap";

class CommentsList extends Component {
  render() {
    return (
      <ListGroupItem className="d-flex justify-content-between">
        <span>Autore: {this.props.author}</span>
        <span>{this.props.comment}</span>
        <span>
          Rate:<Badge bg="warning">{this.props.rate}</Badge>
        </span>
      </ListGroupItem>
    );
  }
}

export default CommentsList;
