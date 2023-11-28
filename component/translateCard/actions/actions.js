import styles from "./actions.module.css";

import { createAudioReaderButton } from "../../audioReader/audioReader.js";
import { createCopyButton } from "../../copyText/copyText.js";
import { translateButton } from "./translate/translate.js";

export const actionsContainer = document.createElement("footer");
actionsContainer.classList.add(styles.actions);

const copyButton = createCopyButton("translate");
const audioReaderButton = createAudioReaderButton("translate");

actionsContainer.append(
  audioReaderButton,
  copyButton,
  translateButton
)

