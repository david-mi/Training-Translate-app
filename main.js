import './styles/reset.css';
import "./styles/global.css";

import { translateCardContainer } from "./component/translateCard/translateCard.js";
import { translatedCardContainer } from "./component/translatedCard/translatedCard.js";

function init() {
  const rootElement = document.getElementById("app");
  const mainElement = document.createElement("main");
  rootElement.append(mainElement);
  mainElement.append(translateCardContainer, translatedCardContainer);
};

init();
