import { createButton } from "../../../button/button.js";
import styles from "./detectLanguageButton.module.css";
import { globalState } from "../../../../globalState.js";

const choseLanguageEvent = new Event("choseLanguage");
export const detectLanguageButton = createButton(null, "Detect Language");

function detectLanguage() {
  const navigatorLang = navigator.language;
  globalState.chosenLanguageIso = navigatorLang;
  dispatchEvent(choseLanguageEvent);
}

detectLanguageButton.addEventListener("click", detectLanguage);
detectLanguageButton.classList.add(styles.detectLanguageButton);