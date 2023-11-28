import styles from "./textEntry.module.css";
import { globalState } from "../../../globalState.js";

const addTranslatedTextEvent = new Event("addTranslatedText");

export const textEntryElement = document.createElement("div");
textEntryElement.classList.add(styles.textEntry);

const textArea = document.createElement("textarea");
textArea.placeholder = "Write your text to translate";
textArea.maxLength = 500;

function handleInput(event) {
  const textToTranslateLenght = event.target.value.length;
  counterElement.innerText = `${textToTranslateLenght}/500`;

  const textToTranslate = event.target.value;
  globalState.textToTranslate = textToTranslate;

  console.log("input");
  debounceInput();
}

let debounceTimeoutId;

function debounceInput() {
  clearTimeout(debounceTimeoutId);

  debounceTimeoutId = setTimeout(() => {
    handleTranslate();
  }, 500);
}

textArea.addEventListener("input", handleInput);

const counterElement = document.createElement("p");
counterElement.innerText = `0/500`;

textEntryElement.append(textArea, counterElement);

// focus textArea Element after it has been rendered in the DOM
setTimeout(() => textArea.focus());

async function handleTranslate() {
  const apiUrl = new URL("https://api.mymemory.translated.net/get");
  apiUrl.searchParams.append("q", globalState.textToTranslate);
  apiUrl.searchParams.append("langpair", `${globalState.chosenLanguageIso}|${globalState.targetLanguageIso}`);

  const response = await fetch(apiUrl.href);

  try {
    if (response.ok === true) {
      const data = await response.json();

      const translatedText = data.responseData.translatedText;
      globalState.translatedText = translatedText;
      dispatchEvent(addTranslatedTextEvent);
    }
  } catch (error) {
    console.error(error);
  }
}