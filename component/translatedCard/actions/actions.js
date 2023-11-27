import styles from "./actions.module.css";

import { audioReaderButton } from "./audioReader/audioReader.js";
import { createCopyButton } from "../../copyText/copyText.js";

export const actionsContainer = document.createElement("footer");
actionsContainer.classList.add(styles.actions);

const copyButton = createCopyButton("translated");

actionsContainer.append(
  audioReaderButton,
  copyButton
)

