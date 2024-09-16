import Crud from "../assets/portfolioImages/crud.png";
import Resense from "../assets/portfolioImages/resense.png";
import Prayer from "../assets/portfolioImages/prayer.png";
import TalkNet from "../assets/portfolioImages/talknet.png";
import Auth from "../assets/portfolioImages/auth.png";
import amazon from "../assets/portfolioImages/amazon.png";
import MemoryGame from "../assets/portfolioImages/memory-game.png";
import Fylo from "../assets/portfolioImages/fylo.png";
import GPT from "../assets/portfolioImages/gpt.png";

// in progress projects

const ProjectsData = [
  {
    id: "amazon",
    img: amazon,
    name: "Amazon Clone",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://amazon-clone-web5ite.netlify.app/",
    source: "https://github.com/AbdulrahmanFa2hy/Amazon-Clone",
    description:
      "SPA (Single Page Application) to rent an Amazon E-commerce Clone with +5 routes and login/signup pages. I have built it with ReactJS, context api, React Router 6, Firebase and CSS for styling. It has a responsive design and navigation.",
  },
  {
    id: "prayer",
    img: Prayer,
    name: "Prayers Time",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://prayer-t1me.netlify.app/",
    source: "https://github.com/AbdulrahmanFa2hy/Prayer-time",
    description:
      "Prayers time app that displays the daily prayer schedule and counts down to the next prayer, based on the selected city. It uses React.js for the interface and Moment.js for time calculations, providing users with real-time updates and a clean, user-friendly design.",
  },
  {
    id: "resense",
    img: Resense,
    name: "ReSense AI",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://resenseai.netlify.app/",
    source: "https://github.com/AbdulrahmanFa2hy/ReSense-AI",
    description: `Our Graduation Project at the Faculty of Navigation Science and Space Technology, I was able to collect all of my team's work in one place by creating this web app. I was responsible for the front end, which I built using Pure JavaScript, HTML, CSS, ApexCharts.js for displaying our data results, Leaflet for the interactive map, and Emailjs to receive the requested parts drawn on the map from the user.`,
  },

  {
    id: "talknet",
    img: TalkNet,
    name: "TalkNet",
    stack: ["< React.js />", "< CSS3 />"],
    live: "https://talknet-chat.netlify.app/",
    source: "https://github.com/AbdulrahmanFa2hy/TalkNet",
    description:
      "Static chat app with login/signup pages. I built this app using React.js, Redux Toolkit, Firebase, React Toastify, and Emoji Picker.",
  },

  {
    id: "crud",
    img: Crud,
    name: "CRUD System",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "https://crud-with-redux.netlify.app/",
    source: "https://github.com/AbdulrahmanFa2hy/CRUD",
    description:
      "This project displays a list of users' names and emails. As part of my front-end practice, I built this using React.js, Redux Toolkit for state management, and React Toastify for displaying notifications. It showcases CRUD operations, allowing for adding, editing, and deleting users within the app.",
  },
  {
    id: "fylo",
    img: Fylo,
    name: "Fylo",
    stack: ["< React.js />  ", "< Tailwind /> ", "< CSS3 />"],
    live: "https://fylo-web-demo.netlify.app/",
    source: "https://github.com/AbdulrahmanFa2hy/Fylo",
    description: "This was practice on Tailwind with React js",
  },
  {
    id: "auth",
    img: Auth,
    name: "Authentication App",
    stack: ["< JavaScript />  ", "< Sass />"],
    live: "https://authintication.netlify.app/sign-in",
    source: "https://github.com/AbdulrahmanFa2hy/Authintication-app",
    description: "Authentication App using Firebase auth",
  },
  {
    id: "memory-game",
    img: MemoryGame,
    name: "Memory Game ",
    stack: ["< JavaScript />"],
    live: "https://abdulrahmanfa2hy.github.io/Memory-Game/",
    source:
      "https://github.com/AbdulrahmanFa2hy/Memory-Game?tab=readme-ov-file",
    description:
      "This Memory Game is developed using pure JavaScript. At the beginning, all cards are briefly revealed before being hidden. The player must match pairs by selecting the correct items, with a counter tracking incorrect attempts. The game also includes sound effects for game start, correct matches, and incorrect guesses.",
  },
  {
    id: "gpt-1",
    img: GPT,
    name: "Modern GPT-3",
    stack: ["< Reactjs />"],
    live: "https://modern-react-project.netlify.app/",
    source: "https://github.com/AbdulrahmanFa2hy/Modern_React_Project",
    description:
      "This Memory Game is developed using pure JavaScript. At the beginning, all cards are briefly revealed before being hidden. The player must match pairs by selecting the correct items, with a counter tracking incorrect attempts. The game also includes sound effects for game start, correct matches, and incorrect guesses.",
  },
  {
    id: "gpt",
    img: GPT,
    name: "Modern GPT-3",
    stack: ["< Reactjs />"],
    live: "https://bootstrap-sass-template.netlify.app/",
    source: "https://github.com/AbdulrahmanFa2hy/Bootstrap_SASS_Template",
    description: "My First Bootstrap SASS Template.",
  },
];

export default ProjectsData;
