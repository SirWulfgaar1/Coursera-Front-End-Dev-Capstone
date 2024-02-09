import appOne from "./images/menu/a_crabartichoke.png";
import appTwo from "./images/menu/a_spinachballs.png";
import appThree from "./images/menu/a_vegannachos.png";
import mainOne from "./images/menu/m_couscous.png";
import mainTwo from "./images/menu/m_mezze.png";
import mainThree from "./images/menu/m_paella.png";
import mainFour from "./images/menu/m_ratatouille.png";
import mainFive from "./images/menu/m_risotto.png";
import mainSix from "./images/menu/m_shakshuka.png";
import sweetOne from "./images/menu/d_crema_catalana.png";
import sweetTwo from "./images/menu/d_galaktoboureko.png";
import sweetThree from "./images/menu/d_namoura.png";

const menu = [
  {
    type: "appetizer",
    name: "Artichoke Dip",
    image: appOne,
    price: "$4.99",
  },
  {
    type: "appetizer",
    name: "Spinach Puffs",
    image: appTwo,
    price: "$6.88",
  },
  {
    type: "appetizer",
    name: "Calamari Rings",
    image: appThree,
    price: "$11.99",
  },
  {
    type: "main",
    name: "Rice Pilaf",
    image: mainOne,
    price: "$3.99",
  },
  {
    type: "main",
    name: "Falafel",
    image: mainTwo,
    price: "$11.99",
  },
  {
    type: "main",
    name: "Tadoori Chicken",
    image: mainThree,
    price: "$14.99",
  },
  {
    type: "main",
    name: "Vegetable Stirfry",
    image: mainFour,
    price: "$10.99",
  },
  {
    type: "main",
    name: "Shepards Pie",
    image: mainFive,
    price: "$15.99",
  },
  {
    type: "main",
    name: "Crab Soup",
    image: mainSix,
    price: "$12.99",
  },
  {
    type: "dessert",
    name: "Pineapple Cake",
    image: sweetOne,
    price: "$4.99",
  },
  {
    type: "dessert",
    name: "Galaktoboureko",
    image: sweetTwo,
    price: "$1.99",
  },
  {
    type: "dessert",
    name: "Nectarine Salad",
    image: sweetThree,
    price: "$2.99",
  },
];

export default menu;
