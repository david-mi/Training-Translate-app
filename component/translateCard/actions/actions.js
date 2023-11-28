import styles from "./actions.module.css";

import { createReadAudioButton } from "../../readAudio/readAudio.js";
import { createCopyButton } from "../../copyText/copyText.js";
import { translateButton } from "./translate/translate.js";

export const actionsContainer = document.createElement("footer");
actionsContainer.classList.add(styles.actions);

const copyButton = createCopyButton("translate");
const audioReaderButton = createReadAudioButton("translate");

actionsContainer.append(
  audioReaderButton,
  copyButton,
  translateButton
)

