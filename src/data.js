import images from './images/images.js'

const projects = [
  {
    name: 'Spotrybe',
    img: images.imgSpotrybe,
    link: 'https://github.com/Ply3r/Projeto_Spotrybe/',
    type: 'fundamentos',
    favorite: true,
  },
  {
    name: 'Pokedex',
    img: images.imgPokedex,
    link: 'https://github.com/Ply3r/my-pokedex/',
    type: 'front',
    favorite: false,
  },
  {
    name: 'MoodStore',
    img: images.imgMoodStore,
    link: 'https://github.com/Ply3r/portifolio_antigo/projetos/loja_de_roupa/index.html',
    type: 'fundamentos',
    favorite: false,
  },
  {
    name: 'Timer',
    img: images.imgTimer,
    link: 'https://github.com/Ply3r/portifolio_antigo/projetos/timer/index.html',
    type: 'fundamentos',
    favorite: false,
  },
  {
    name: 'Netflix React',
    img: images.imgNetflix,
    link: 'https://github.com/Ply3r/netflix-react/',
    type: 'front',
    favorite: true,
  },
  {
    name: 'Yu-gi-oh',
    img: images.yugioh,
    link: 'https://github.com/Ply3r/yu-gi-oh',
    type: 'front',
    favorite: false,
  },
  {
    name: 'Trybe-Tunes',
    img: images.trybeTunes,
    link: 'https://github.com/Ply3r/trybe-tunes',
    type: 'front',
    favorite: true,
  },
  {
    name: 'MoodStore2.0',
    img: images.moodStore2,
    link: 'https://github.com/Ply3r/mood-store2.0/',
    type: 'front',
    favorite: true,
  },
  {
    name: 'Timer2.0',
    img: images.timer2,
    link: 'https://github.com/Ply3r/timer2.0/',
    type: 'front',
    favorite: true,
  },
  {
    name: 'Trybe wallet',
    img: images.trWallet,
    link: 'https://github.com/Ply3r/trybe-wallet/',
    type: 'front',
    favorite: false,
  },
  {
    name: 'Solar System',
    img: images.solarSystem,
    link: 'https://github.com/Ply3r/Solar-System/',
    type: 'front',
    favorite: true,
  },
  {
    name: 'Star Wars 3D',
    img: images.starWars,
    link: 'https://github.com/Ply3r/star-wars-3d/',
    type: 'front',
    favorite: false,
  },
  {
    name: 'App de receitas',
    img: images.recipeApp,
    link: 'https://github.com/Ply3r/recipes-app',
    type: 'front',
    favorite: true,
  },
  {
    name: 'Flappy Bird',
    img: images.flappyBird,
    link: 'https://github.com/Ply3r/flappy-bird',
    type: 'back',
    favorite: false,
  },
  {
    name: 'Snake',
    img: images.snake,
    link: 'https://github.com/Ply3r/snake',
    type: 'back',
    favorite: false,
  },
]

const skills = [
  {
    id: 1,
    name: 'html',
    type: 'front',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
  },
  {
    id: 2,
    name: 'css',
    type: 'front',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
  },
  {
    id: 3,
    name: 'javascript',
    type: 'front',
    img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
  },
  {
    id: 4,
    name: 'react',
    type: 'front',
    img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
  },
  {
    id: 5,
    name: 'jest',
    type: 'front',
    img: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png'
  },
  {
    id: 6,
    name: 'redux',
    type: 'front',
    img: 'https://img.icons8.com/color/48/000000/redux.png'
  },
  {
    id: 7,
    name: 'bootstrap',
    type: 'front',
    img: 'https://img.icons8.com/color/48/000000/bootstrap.png'
  },
  {
    id: 8,
    name: 'git',
    type: 'back',
    img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png'
  },
  {
    id: 9,
    name: 'python',
    type: 'back',
    img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png'
  },
  {
    id: 10,
    name: 'mySql',
    type: 'back',
    img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png'
  },
  {
    id: 11,
    name: 'docker',
    type: 'back',
    img: 'https://user-images.githubusercontent.com/68698781/148557525-ac893d52-85e2-49a7-b7fc-8bd6c0464612.png'
  },
  {
    id: 12,
    name: 'mongoDB',
    type: 'back',
    img: 'https://user-images.githubusercontent.com/68698781/152196540-efaf5119-67de-43f1-b955-55ed2b086796.png'
  },
  {
    id: 13,
    name: 'nodeJS',
    type: 'back',
    img: 'https://user-images.githubusercontent.com/68698781/152196431-6032d26a-545a-414d-a10c-6deddfe52f90.png'
  },
]

const data = { projects, skills }
export default data;
