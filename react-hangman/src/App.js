import React, { Component } from 'react';
import Button from './Components/button'
import themes from './Components/themes.json'

class App extends Component {

  state = {
    themes,
    selectedTheme: '',
    selectedGenre: '',

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

              {this.state.selectedTheme 
              ? Object.keys(this.state.themes[this.state.selectedTheme].genre).map(key =>
                <Button 
                theme={key}
                onClick={this.chooseGenre}
              /> 
                ) : 
              Object.keys(this.state.themes).map( key => 
      
                <Button 
                  theme={key}
                  onClick={this.chooseTheme}
                />  
                
              )

              }
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
