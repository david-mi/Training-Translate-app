import styles from "./header.module.css";
import { detectLanguageButton } from "./detectLanguage/detectLanguage.js";
import { createSelectLanguageElement } from "../../selectLanguage/selectLanguage.js";

export const headerElement = document.createElement("header");
headerElement.classList.add(styles.header);

export const selectLanguageElement = createSelectLanguageElement("translate");

headerElement.append(
  detectLanguageButton,
  selectLanguageElement
);
