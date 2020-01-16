import React from "react";

class App extends React.Component {
  state = {
    guesses: 0,
    gametype: "",
    number: null,
    standardHighScore: 0,
    expertHighScore: 0,
    highScore: 0,
  };

  random10 = () => {
    alert('Please type in a number 1-10')
    var random10 = Math.floor(Math.random() * 10) + 1;
    console.log(random10);
    this.setState({
      number: random10,
      gametype: "standard",
    });
  };

  random100 = () => {
    alert('Please type in a number 1-100')
    var random100 = Math.floor(Math.random() * 100) + 1;
    console.log(random100);
    this.setState({
      number: random100,
      gametype: "expert",
    });
  };

  handleReset = () => {
    this.setState({
      guesses: 0,
      gametype: "",
      number: null,
      highScore: 0,
    });
  };

  handleGuesses = () => {
    var inputNumber = document.getElementById("input").value;

    if (inputNumber === "") {
      alert("put something in");
      return;
    }

    if (this.state.gametype === "") {
      alert("choose a game first");
      return;
    }

    var guess = this.state.guesses + 1;
    this.setState({
      guesses: guess,
    });

    if (this.state.number == inputNumber) {
      alert(`congrats you won. it took you ${guess} guesses`);
      if (
        (this.state.highScore > guess && this.state.gametype === "standard") ||
        (this.state.gametype === "standard" && this.state.highScore === 0)
      ) {
        this.setState({
          gametype: "",
          guesses: 0,
          standardHighScore: guess,
          highScore: guess,
        });
      } else if (
        (this.state.highScore > guess && this.state.gametype === "expert") ||
        (this.state.gametype === "expert" && this.state.highScore === 0)
      ) {
        this.setState({
          gametype: "",
          guesses: 0,
          expertHighScore: guess,
          highScore: guess,
        });
      } else if (this.state.highScore === 0) {
        this.setState({
          gametype: "",
          highScore: guess,
          guesses: 0,
        });
      } else if (this.state.highScore < guess) {
        this.setState({
          highScore: guess,
          gametype: "",
          guesses: 0,
        });
      }
    } else if (this.state.number < inputNumber) {
      alert("too high");
    } else if (this.state.number > inputNumber) {
      alert("too low");
    }
  };

  render() {
    return (
      <div>
        <h1>guessing game</h1>
        <p>{this.state.guesses}</p>
        <button onClick={this.random10}>standard</button>
        <button onClick={this.random100}>expert</button>
        <input id="input" type="text"></input>
        <button onClick={this.handleGuesses}>submit</button>
        <button onClick={this.handleReset}>reset</button>
        <h2>high score</h2>
        <p>{this.state.highScore}</p>
        <h2>standard high score</h2>
        <p>{this.state.standardHighScore}</p>
        <h2>expert high score</h2>
        <p>{this.state.expertHighScore}</p>
      </div>
    );
  }
}

export default App;
