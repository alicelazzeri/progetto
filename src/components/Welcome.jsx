import { Container } from "react-bootstrap";

function Welcome() {
  return (
    <>
      <Container fluid className="bg-dark py-3">
        <div>
          <p className="display-5 my-4 text-light fw-light">Welcome to the world of EpiBooks!</p>
          <p className="fs-4 text-light fw-light">
            Dive into the world of EpiBooks, take a glance at our collection of books! 📚
          </p>
        </div>
      </Container>
    </>
  );
}

export default Welcome;
