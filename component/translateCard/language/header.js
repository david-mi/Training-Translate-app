import styles from "./header.module.css";
import { selectMenu } from "./selectLanguage/selectLanguage.js";

export const headerElement = document.createElement("header");
headerElement.classList.add(styles.header);

headerElement.append(
  selectMenu
);
