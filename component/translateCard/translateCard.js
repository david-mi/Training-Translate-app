import styles from "./translateCard.module.css";
import { headerElement } from "./language/header.js";
import { textEntryElement } from "./textEntry/textEntry.js";
import { actionsContainer } from "./actions/actions.js";

export const translateCardContainer = document.createElement("div");
translateCardContainer.classList.add(styles.container);
translateCardContainer.append(
  headerElement,
  textEntryElement,
  actionsContainer
)


