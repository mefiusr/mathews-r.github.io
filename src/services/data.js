import Blog from '../images/blogs.jpg';
import Times from '../images/times.png';
import Recipes from '../images/recipes.jpeg';
import Wallet from '../images/wallet.jpeg';
import Delivery from '../images/delivery.jpg';
import Trivia from '../images/trivia.jpeg';

const data = [
  {
    id: 'trybewallet',
    name: 'TrybeWallet - Front End',
    description: 'Gerenciamento de estado global - Redux',
    image: Wallet,
    url: 'trybewallet'
  },
  {
    id: 'triviagame',
    name: 'Trivia Game - Front End',
    description: 'React, Redux e SoftSkills',
    image: Trivia,
    url: 'https://main.d3hwi23vv25da8.amplifyapp.com',
  },
  {
    id: 'recipesapp',
    name: 'Recipes App - Front End',
    description: 'Trabalho em grupo, manipulação de estados, componentes e softskills ',
    image: Recipes,
    url: 'recipesapp'
  },
  {
    id: 'blogposts',
    name: 'Blog Posts - Back End',
    description: 'Componentes com estado/eventos e formulários em React',
    image: Blog,
    url: 'https://github.com/mathews-r/blogsapi'
  },
  {
    id: 'tfc',
    name: 'Trybe Futebol Clube - Back End',
    description: 'Componentes com estado/eventos e formulários em React',
    image: Times,
    url: ''
  },
  {
    id: 'deliveryapp',
    name: 'Delivery App - Back End',
    description: 'APIs, componentes',
    image: Delivery,
    url: '',
  }
]

export default data;
