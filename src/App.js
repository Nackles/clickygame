import React, { Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Clickable from './components/Clickable.js';
import characters from './characters.json';

// Extend App as Component to use stateful variables
class App extends Component {
  // Initializing display variables and character cards from JSON 
  state = {
    combo: 0,
    highest: 0,
    characters
  }


  // Show a Jumbotron with instructions and a randomly sorted array of character images to click
 render() {
  return (
    <Container>
    <Jumbotron>
      <p>Clicking an image gives you a point, but only if you haven't clicked it yet... Try to click 12 in a row!</p>
    </Jumbotron>
    {/* For each character, create a card and track its clicked state */}
    {this.state.characters.map(character => {
      return <Clickable
      key={character.id}
      id={character.id}
      img={character.img}
      clicked={false}
      />
    })}
    </Container>
  );
 }
}

export default App;
