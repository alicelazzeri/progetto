import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  request = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmQ4NmY4MWI0MjAwMTM5YjI3ZGUiLCJpYXQiOjE2ODA1MjQxNTQsImV4cCI6MTY4MTczMzc1NH0.H-eOaHcc8xAYIrtJhZ1vvuLziVdP-5FhK9CJ0S0rQzA",
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      }
    } catch (error) {
      console.error(error);
    }
  };
  componentDidMount() {
    this.request();
  }

  render() {
    return (
      <ListGroup>
        {this.state.comments.map(comment => (
          <CommentsList key={comment._id} author={comment.author} comment={comment.comment} rate={comment.rate} />
        ))}
        ;
      </ListGroup>
    );
  }
}

export default CommentArea;
