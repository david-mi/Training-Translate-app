import styles from "./actions.module.css";

import { createCopyButton } from "../../copyText/copyText.js";
import { createAudioReaderButton } from "../../audioReader/audioReader.js";

export const actionsContainer = document.createElement("footer");
actionsContainer.classList.add(styles.actions);

const copyButton = createCopyButton("translated");
const audioReaderButton = createAudioReaderButton("translated");

actionsContainer.append(
  audioReaderButton,
  copyButton
)

