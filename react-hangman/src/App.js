import React, { Component } from 'react';
import Button from './Components/button'
import themes from './Components/themes.json'

class App extends Component {

  state = {
    themes,
    selectedTheme: '',
    selectedGenre: '',

  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    console.log(e);
  } 

  chooseTheme = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({selectedTheme: e.target.value})
  }

  chooseGenre = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({selectedGenre: e.target.value})
  }

  render() {

    let buttons;

    if (this.state.selectedTheme) {
      buttons = Object.keys(this.state.themes[this.state.selectedTheme].genre).map(key =>
        <Button 
        theme={key}
        onClick={this.chooseGenre}
      />
      )
    } else if (this.state.themes) {
      buttons = Object.keys(this.state.themes).map( key => 
      
        <Button 
          theme={key}
          onClick={this.chooseTheme}
        />  
        
      )
    } 

    return (
      <div>
        <div className="jumbotron container text-center">
          <h1 id="header">
            Hangman!
          </h1>
          <div id="message">
            <h3>Pick a theme</h3>
          </div>

          <div id="buttons" className="d-flex justify-content-around">

              {buttons}
          </div>
          <div id="guess-text" className="row d-flex align-items-center">
            <div className='col-6 text-left'>
              <h4 id="wrong-guesses">Already guessed: </h4>
            </div>
            <div className='col-6 text-right'>
              <h4 id="guesses-left">Guesses Left: </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
