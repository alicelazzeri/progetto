import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import books from "./books/horror.json";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <Container fluid style={{ backgroundColor: "#d9a162" }}>
        <BookList books={books} />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
