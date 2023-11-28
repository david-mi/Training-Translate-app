import translateSvgSrc from "/sort_alfa.svg";
import { globalState } from "../../../../globalState.js";
import { createButton } from "../../../button/button.js";
import styles from "./translate.module.css";

const addTranslatedTextEvent = new Event("addTranslatedText");
export const translateButton = createButton(translateSvgSrc, "Translate");
translateButton.classList.add(styles.translateButton);

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

translateButton.addEventListener("click", handleTranslate);
