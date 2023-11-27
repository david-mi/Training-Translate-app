import styles from "./translatedCard.module.css";
import { headerElement } from "./language/header.js";
import { translatedTextElement } from "./textEntry/translatedText.js";
import { actionsContainer } from "./actions/actions.js";

export const translatedCardContainer = document.createElement("div");
translatedCardContainer.classList.add(styles.container);
translatedCardContainer.append(
  headerElement,
  translatedTextElement,
  actionsContainer
)


