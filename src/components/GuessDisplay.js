import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

const GuessDisplay = ({ guesses, setGuesses }) => {

   const buttonClicked = () => {
    setGuesses([])
   }

   const listClicked = (event) => {
    let listId = parseInt(event.target.id)
    setGuesses(guesses.filter(guess => guess.id !== listId))
   }



  return (
    <Container >
      <Row className="guessed mb-3">Recently guessed emails</Row>
      <Row className="mb-3 d-flex flex-column align-items-center ">
        {!guesses.length ? (
          <ListGroup>
            <ListGroup.Item>No guesses yet</ListGroup.Item>
          </ListGroup>
        ) : (<>
          <ListGroup className="mb-3 ">
            {guesses.map((guess) => (
              <ListGroup.Item id={guess.id} className="d-flex justify-content-between align-items-center" key={guess.id}>{guess.email}
              <Button variant="primary" id={guess.id} className="delete-btn"  onClick={listClicked}>
          x
        </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="primary" onClick={buttonClicked}>
          Delete guesses
        </Button>
        </>
        )}
      </Row>
    </Container>
  );
};

export default GuessDisplay;
