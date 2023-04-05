import { Component } from "react";
import AddComment from "./AddComment";
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
        const commentsArr = await response.json();
        this.setState({ comments: commentsArr }); // porto fuori l'array di dati ottenuti inserendoli nello state
      }
    } catch (error) {
      alert(error);
    }
  };
  componentDidMount() {
    this.request();
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <AddComment asin={this.props.asin} request={this.request} />
        <CommentsList comments={this.state.comments} />
      </>
    );
  }
}

export default CommentArea;
