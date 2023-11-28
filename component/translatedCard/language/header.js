import styles from "./header.module.css";
import { createSelectLanguageElement } from "../../selectLanguage/selectLanguage.js";
import { reverseLanguagesButton } from "./reverseLanguages/reverseLanguages.js";

export const headerElement = document.createElement("header");
headerElement.classList.add(styles.header);

export const selectTargetLanguageElement = createSelectLanguageElement("translated");

headerElement.append(
  selectTargetLanguageElement,
  reverseLanguagesButton
);
