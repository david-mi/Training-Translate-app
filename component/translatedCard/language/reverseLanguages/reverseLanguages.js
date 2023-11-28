import { createButton } from "../../../button/button.js";
import reverseSvgSrc from "/reverse.svg";
import { globalState } from "../../../../globalState.js";
import { textArea } from "../../../translateCard/textEntry/textEntry.js";
import { translatedTextElement } from "../../translatedText/translatedText.js";
import { selectLanguageElement } from "../../../translateCard/language/header.js";
import { selectTargetLanguageElement } from "../header.js";

export const reverseLanguagesButton = createButton(reverseSvgSrc);

function reverseLanguages() {
  const chosenLanguageIso = globalState.chosenLanguageIso;

  globalState.chosenLanguageIso = globalState.targetLanguageIso;
  globalState.targetLanguageIso = chosenLanguageIso;

  selectLanguageElement.value = globalState.chosenLanguageIso;
  selectTargetLanguageElement.value = globalState.targetLanguageIso;

  const textToTranslate = globalState.textToTranslate;
  globalState.textToTranslate = globalState.translatedText;
  globalState.translatedText = textToTranslate;

  textArea.value = globalState.textToTranslate;
  translatedTextElement.innerText = globalState.translatedText;
}

reverseLanguagesButton.addEventListener("click", reverseLanguages);