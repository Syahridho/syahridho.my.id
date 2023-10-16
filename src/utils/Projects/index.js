import music from "./../../assets/projects/uiMusic.webp";
import shoes from "./../../assets/projects/uiShoes.webp";
import crud_react from "./../../assets/projects/crud_react.webp";
import laptop from "./../../assets/projects/store_laptop.webp";

const projectsData = () => [
  {
    id: 1,
    title: "Ui music list",
    desc: "The look of my classical music app",
    img: music,
    git: false,
    link: false,
  },
  {
    id: 2,
    title: "Crud React",
    desc: "This web uses react and tailwind to make it",
    img: crud_react,
    git: "https://github.com/Syahridho/Notes-App.git",
    link: "https://crud-react.syahridhoas.repl.co",
  },
  {
    id: 3,
    title: "Ui store laptop",
    desc: "This look of my store laptop app",
    img: laptop,
    git: false,
    link: false,
  },
  {
    id: 4,
    title: "Ui shoes store",
    desc: "this look of my store shoes home page",
    img: shoes,
    git: false,
    link: false,
  },
];

export default projectsData;
