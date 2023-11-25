import styles from "./actions.module.css";

import { audioReaderButton } from "./audioReader/audioReader.js";
import { copyTextButton } from "./copyText/copyText.js";
import { translateButton } from "./translate/translate.js";

export const actionsContainer = document.createElement("footer");
actionsContainer.classList.add(styles.actions);

actionsContainer.append(
  audioReaderButton,
  copyTextButton,
  translateButton
)

