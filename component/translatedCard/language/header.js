import styles from "./header.module.css";
import { createSelectLanguageElement } from "../../selectLanguage/selectLanguage.js";

export const headerElement = document.createElement("header");
headerElement.classList.add(styles.header);

const selectLanguageElement = createSelectLanguageElement("translated");

headerElement.append(
  selectLanguageElement
);
