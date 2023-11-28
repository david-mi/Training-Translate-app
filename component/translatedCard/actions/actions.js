import styles from "./actions.module.css";

import { createCopyButton } from "../../copyText/copyText.js";
import { createReadAudioButton } from "../../readAudio/readAudio.js";

export const actionsContainer = document.createElement("footer");
actionsContainer.classList.add(styles.actions);

const copyButton = createCopyButton("translated");
const audioReaderButton = createReadAudioButton("translated");

actionsContainer.append(
  audioReaderButton,
  copyButton
)

