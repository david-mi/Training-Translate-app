import styles from "./selectLanguage.module.css";
import { globalState } from "../../globalState.js";
import { handleTranslate } from "../translateCard/textEntry/textEntry.js";
export const changeTargetLanguageEvent = new Event("choseTargetLanguage");

const languages = [
  { name: "French", iso: "fr" },
  { name: "English", iso: "en" },
  { name: "Spanish", iso: "es" },
  { name: "German", iso: "de" },
  { name: "Italian", iso: "it" },
  { name: "Portuguese", iso: "pt" },
  { name: "Dutch", iso: "nl" },
  { name: "Swedish", iso: "sv" },
  { name: "Norwegian", iso: "no" },
  { name: "Danish", iso: "da" },
  { name: "Finnish", iso: "fi" },
  { name: "Greek", iso: "el" }
];

export function createSelectLanguageElement(target) {
  const selectLanguageElement = document.createElement("select");
  selectLanguageElement.classList.add(styles.selectLanguageElement);

  languages.forEach((language) => {
    const optionElement = document.createElement("option");
    optionElement.value = language.iso;
    optionElement.innerText = language.name;

    selectLanguageElement.append(optionElement);
  });

  if (target === "translate") {
    selectLanguageElement.value = languages[0].iso;
    globalState.chosenLanguageIso = selectLanguageElement.value;

    window.addEventListener("choseLanguage", () => {
      selectLanguageElement.value = globalState.chosenLanguageIso;
    });
  } else {
    window.addEventListener("choseTargetLanguage", () => {
      selectLanguageElement.value = globalState.targetLanguageIso;
    });
    selectLanguageElement.value = languages[1].iso;
    globalState.targetLanguageIso = selectLanguageElement.value;
  }

  function selectLanguage(event) {
    const iso = event.target.value;

    if (target === "translate") {
      globalState.chosenLanguageIso = iso;
    } else {
      globalState.targetLanguageIso = iso;
    }

    handleTranslate();
  }

  selectLanguageElement.addEventListener("click", selectLanguage);

  return selectLanguageElement;
}
