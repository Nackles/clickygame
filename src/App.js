import "bootstrap/dist/css/bootstrap.min.css";
import "./mystyle.css";
import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import Clickable from "./components/Clickable.js";
import characters from "./characters.json";

// Extend App as Component to use stateful variables
class App extends Component {
  // Initializing display variables and character cards from JSON
  state = {
    combo: 0,
    highest: 0,
    characters,
    beenClicked: []
  };

  // Shuffle card order on instantiation.
  componentDidMount() {
    this.shuffle();
  }

  // When a Clickable gets clicked...
  /* Check if its ID is included in beenClicked and if...
  /** false: Push its ID to beenClicked
  /** true: trigger a game over and reset the game */
  gotClicked = idClicked => {
    // If beenClicked[] includes that Clickable's ID, game over: (reset combo, set highest)
    // Otherwise, push that ID to beenClicked[], increment combo, and shuffle()
    if (this.state.beenClicked.includes(idClicked)) {
      console.log("ID has been clicked: GAME OVER");
      // If that combo is greater than highest, record new highest
      if (this.state.combo > this.state.highest) {
        this.setState({
          highest: this.state.combo
        });
      }
      // Always set combo to zero and reset beenClicked[]
      this.setState({
        combo: 0,
        beenClicked: []
      });
      // Reset the board with a shuffle!
      this.shuffle();
    } else {
      console.log("ID has not been clicked: PUSHING TO beenClicked");
      // Recording card has been clicked
      this.state.beenClicked.push(idClicked);
      // Rendering information to client and updating combo
      this.setState({
        beenClicked: this.state.beenClicked,
        combo: this.state.combo + 1
      });
      // Shuffle cards!
      this.shuffle();
    }
  };

  // We're going to shuffle our cards a lot.
  shuffle = () => {
    // Randomly!
    this.state.characters.sort(() => Math.random() - 0.5);
    // Making sure the change will be reflected on the client's side.
    this.setState({
      characters: this.state.characters
    });
  };

  // Show a Jumbotron with instructions and a randomly sorted array of character images to click.
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Bojack Paparazzi</h1>
          <p>
            Clicking an image gives you a point, but only if you haven't clicked
            it yet... <p>Try to click all 12 in a row!</p>
          </p>
          <p>
            Combo: {this.state.combo} Highest: {this.state.highest}
          </p>
        </Jumbotron>
        {/* For each character, create a card and track its clicked state */}
        <div className="d-inline-flex justify-content-center flex-wrap">
        {this.state.characters.map(character => {
          return (
            <Clickable
              key={character.id}
              id={character.id}
              img={character.img}
              clicked={false}
              onClick={this.gotClicked}
            />
          );
        })}
        </div>
      </Container>
    );
  }
}

export default App;
