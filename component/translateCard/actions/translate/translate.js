import styles from "./translate.module.css";

import translateSvgSrc from "/sort_alfa.svg";
import { globalState } from "../../../../globalState.js";

const addTranslatedTextEvent = new Event("addTranslatedText");

const imageElement = document.createElement("img");
imageElement.src = translateSvgSrc;

const spanElement = document.createElement("span");
spanElement.innerText = "Translate";

export const translateButton = document.createElement("button");
translateButton.append(
  imageElement,
  spanElement
);

async function handleTranslate() {
  const apiUrl = new URL("https://api.mymemory.translated.net/get");
  apiUrl.searchParams.append("q", globalState.textToTranslate);
  apiUrl.searchParams.append("langpair", `${globalState.chosenLanguageIso}|${globalState.targetLanguageIso}`);

  const response = await fetch(apiUrl.href);

  console.log(globalState);

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

translateButton.addEventListener("click", handleTranslate);
