import styles from "./selectLanguage.module.css";
import { globalState } from "../../globalState.js";

const languages = [
  { name: "Français", iso: "fr" },
  { name: "Anglais", iso: "en" },
  { name: "Espagnol", iso: "es" },
  { name: "Allemand", iso: "de" },
  { name: "Italien", iso: "it" },
  { name: "Portugais", iso: "pt" },
  { name: "Néerlandais", iso: "nl" },
  { name: "Suédois", iso: "sv" },
  { name: "Norvégien", iso: "no" },
  { name: "Danois", iso: "da" },
  { name: "Finnois", iso: "fi" },
  { name: "Grec", iso: "el" }
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
  } else {
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
  }

  selectLanguageElement.addEventListener("click", selectLanguage);

  return selectLanguageElement;
}
