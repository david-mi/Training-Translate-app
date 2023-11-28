import styles from "./translatedText.module.css";
import { globalState } from "../../../globalState.js";

export const translatedTextElement = document.createElement("p");
translatedTextElement.classList.add(styles.translatedText);

translatedTextElement.textContent = globalState.translatedText;

function addTranslatedText() {
  translatedTextElement.textContent = globalState.translatedText;
}

window.addEventListener("addTranslatedText", addTranslatedText);