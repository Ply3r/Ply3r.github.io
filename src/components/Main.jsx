import { useEffect, useState } from "react";
import images from "../images/images";
import '../css/main.css';

const Main = () => {
  const [words] = useState(['Developer.', 'Designer.', 'Student.']);
  const [colors] = useState(['#4cc9f0', '#8338ec', '#2fc18b']);
  const [textVariables, setTextValiables] = useState({
    speed: 300,
    actualWord: '',
    actualPosition: 0
  })

  const changeWord = () => {
    let { speed, actualWord, actualPosition } = textVariables

    let isTyping = true;
    let wordLength = 0;

    setInterval(() => {
      const word = words[actualPosition].split('');
      speed = 300;

      if (isTyping) {
        wordLength += 1;

        if (wordLength > word.length) {
          speed = 2000;
          isTyping = false;
        };
      
      } else {
        wordLength -= 1;

        if (wordLength <= 0) {
          speed = 2000
          isTyping = true;
          actualPosition = actualPosition < words.length - 1 ? actualPosition + 1 : 0
        }

      }

      const wordAtCurrentSize = word.slice(0, wordLength).join('')
      actualWord = wordAtCurrentSize;

      setTextValiables({ speed, actualWord, actualPosition })
    }, speed)
  };

  useEffect(() => {
    changeWord();
  }, [])

  const { actualPosition, actualWord } = textVariables;
  return (
    <div className="main-container">
      <div className="information-main-container">
        <h1>Hi my name is <span className="name">Leandro</span>,</h1>
        <h1>and i'm a <span className="palavras" style={{color: colors[actualPosition]}}>{ actualWord }</span></h1>
      </div>
      <div className="image-main-container">
        <img src={images.firtsImg} alt="main-imagem"/>
      </div>
    </div>
  )
}

export default Main;