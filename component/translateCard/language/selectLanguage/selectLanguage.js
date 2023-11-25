import styles from "./selectLanguage.module.css";
import { globalState } from "../../../../globalState.js";

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

export const selectMenu = document.createElement("select");
selectMenu.classList.add(styles.selectMenu);

languages.forEach((language) => {
  const optionElement = document.createElement("option");
  optionElement.value = language.iso;
  optionElement.innerText = language.name;

  selectMenu.append(optionElement);
});

globalState.chosenLanguageIso = selectMenu.value;

function selectLanguage(event) {
  const iso = event.target.value;
  globalState.chosenLanguageIso = iso;
}

selectMenu.addEventListener("click", selectLanguage);

console.log(globalState);
