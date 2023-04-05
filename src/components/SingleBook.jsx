import { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import CommentArea from "./CommentArea";
class SingleBook extends Component {
  state = {
    selected: false,
  };
  toggleBook = () => {
    this.setState(prevState => ({
      selected: !prevState.selected,
      asin: !prevState.selected ? this.props.asin : "",
    }));
  };

  render() {
    const selectedStyle = {
      border: this.state.selected ? "10px double #4B0082" : "4px double #722929",
    };
    return (
      <Card>
        <Card.Img
          className="img-fluid"
          variant="top"
          src={this.props.img}
          onClick={this.toggleBook}
          id="card"
          style={selectedStyle}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{this.props.title}</Card.Title>
          <Card.Text>
            <Badge className="p-2 my-2" bg="warning">
              {this.props.price} €
            </Badge>
          </Card.Text>
          {this.state.selected && <CommentArea asin={this.props.asin} />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
