import './App.css';
import { Switch, Route } from 'react-router-dom';
import GuesserForm from "./components/GuesserForm";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {

  return (
    <>
    <Navigation />
    <Container className="d-flex justify-content-center">

      <Row>
        <Switch>
          <Route exact path='/' ><Home/></Route>
          <Route exact path='/guesser'><GuesserForm/></Route>
        </Switch>
      </Row>
    </Container>
    </>
  );
}

export default App;
