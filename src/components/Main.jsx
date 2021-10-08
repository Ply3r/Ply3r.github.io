import React, { Component } from "react";
import '../css/main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.changeWord = this.changeWord.bind(this);
    this.state = {
      words: ['Front-end Developer', 'Designer', 'Student'],
      positionWord: 0,
      actualWord: '',
    }
  }

  changeWord = () => {
    let index = 0;
    setInterval(() => {
      const { words, positionWord } = this.state;
      const word = words[positionWord].split('');
      if (index >= word.length) {
        index = 0;
        this.setState({ actualWord: '' })
        if (positionWord >= words.length - 1) {
          this.setState({ positionWord: 0 })
        } else {
          this.setState({ positionWord: positionWord + 1})
        }
      } else {
        this.setState((after) => ({actualWord: after.actualWord + word[index]}))
        index += 1;
      }
    }, 300)
  };

  componentDidMount() {
    this.changeWord();
  }

  render() {
    const { actualWord } = this.state;
    return (
      <div className="main-container">
        <div className="information-main-container">
          <h1>Hi my name is <span className="name">Leandro</span></h1>
          <h1> and i'm a <span>{ actualWord }</span></h1>
        </div>
        <div className="image-main-container">
          <img src='https://ply3r.github.io/imagens/imagem1.png' alt="main-imagem"/>
        </div>
      </div>
    )
  }
}

export default Main;