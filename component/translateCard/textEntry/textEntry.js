import styles from "./textEntry.module.css";
import { globalState } from "../../../globalState.js";

export const textEntryElement = document.createElement("div");
textEntryElement.classList.add(styles.textEntry);

const textArea = document.createElement("textarea");
textArea.placeholder = "Votre texte";
textArea.maxLength = 500;

function handleBlur(event) {
  const textToTranslate = event.target.value;
  globalState.textToTranslate = textToTranslate;
}

textArea.addEventListener("blur", handleBlur);

function handleInput(event) {
  const textToTranslateLenght = event.target.value.length;
  counterElement.innerText = `${textToTranslateLenght}/500`;
}

textArea.addEventListener("input", handleInput);

const counterElement = document.createElement("p");
counterElement.innerText = `0/500`;

textEntryElement.append(textArea, counterElement);

// idée de nathalie
setTimeout(() => {
  textArea.focus();
});
