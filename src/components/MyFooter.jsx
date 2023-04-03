import { Container } from "react-bootstrap";

function MyFooter() {
  return (
    <Container className="bg-success" fluid>
      <footer className=" d-flex justify-content-between align-items-center pt-3 px-4">
        <p className="text-white fw-light">"Books are a uniquely portable magic. ✨"</p>
        <br />
        <p className="text-light">EpiBooks &copy; 2023</p>
      </footer>
    </Container>
  );
}

export default MyFooter;
