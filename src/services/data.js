import Blog from '../images/blogs.jpg';
import Teams from '../images/times.png';
import Recipes from '../images/recipes.jpeg';
import Wallet from '../images/wallet.jpeg';
import Delivery from '../images/delivery.jpg';
import Trivia from '../images/trivia.jpeg';

const data = [
  {
    id: 'trybewallet',
    name: 'TrybeWallet - Front End',
    description: 'Gerenciamento de estados com Redux e actions assíncronas',
    image: Wallet,
    url: 'trybewallet'
  },
  {
    id: 'triviagame',
    name: 'Trivia Game - Front End',
    description: 'Redux, Testes com RTL e SoftSkills',
    image: Trivia,
    url: 'https://main.d3hwi23vv25da8.amplifyapp.com',
  },
  {
    id: 'recipesapp',
    name: 'Recipes App - Front End',
    description: 'Hooks, ContextAPI, Redux e SoftSkills ',
    image: Recipes,
    url: 'recipesapp'
  },
  {
    id: 'blogposts',
    name: 'Blog Posts - Back End',
    description: 'Desenvolvimento de API REST com NodeJS, Sequelize e CRUD',
    image: Blog,
    url: 'https://github.com/mathews-r/blogsapi'
  },
  {
    id: 'tfc',
    name: 'Trybe Futebol Clube - Back End',
    description: 'TypeScript, SOLID, MYSQL, Sequelize e CRUD',
    image: Teams,
    url: 'https://github.com/mathews-r/trybe-futebol-clube'
  },
  {
    id: 'deliveryapp',
    name: 'Delivery App - Back End',
    description: 'Em breve',
    image: Delivery,
    url: '',
  }
]

export default data;
