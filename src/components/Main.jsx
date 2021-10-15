import React, { Component } from "react";
import images from "../images/images";
import '../css/main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.changeWord = this.changeWord.bind(this);
    this.state = {
      words: ['Developer.', 'Designer.', 'Student.'],
      colors: ['#4cc9f0', '#8338ec', '#2fc18b'],
      positionWord: 0,
      actualWord: '',
    }
  }

  changeWord = () => {
    let index = 0;
    let contRemove = 0;
    this.changeWordInterval = setInterval(() => {
      const { words, positionWord } = this.state;
      const word = words[positionWord].split('');
      if (index >= word.length) {
        contRemove += 1;
        if (contRemove > word.length) {
          index = 0;
          contRemove = 0;
          if (positionWord >= words.length - 1) {
            this.setState({ positionWord: 0 })
          } else {
            this.setState((after) => ({ positionWord: after.positionWord + 1 }))
          }
        } else {
          const hold = word.slice(0, word.length - contRemove).join('')
          this.setState({ actualWord: hold })
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

  componentWillUnmount() {
    clearInterval(this.changeWordInterval)
  }

  render() {
    const { actualWord, colors, positionWord } = this.state;
    return (
      <div className="main-container">
        <div className="information-main-container">
          <h1>Hi my name is <span className="name">Leandro</span>,</h1>
          <h1>and i'm a <span className="palavras" style={{color: colors[positionWord]}}>{ actualWord }</span></h1>
        </div>
        <div className="image-main-container">
          <img src={images.firtsImg} alt="main-imagem"/>
        </div>
      </div>
    )
  }
}

export default Main;