import { Component } from "react";
import { Card, Badge } from "react-bootstrap";
class SingleBook extends Component {
  state = {
    selected: false,
  };
  toggleBook = () => {
    this.setState(prevState => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const selectedStyle = {
      border: this.state.selected ? "10px double #4B0082" : "4px double #722929",
    };
    return (
      <Card onClick={this.toggleBook} id="card" style={selectedStyle}>
        <Card.Img className="img-fluid" variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{this.props.title}</Card.Title>
          <Card.Text>
            <Badge className="p-2 my-2" bg="warning">
              {this.props.price} €
            </Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
