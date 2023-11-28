import styles from "./copyText.module.css";
import { globalState } from "../../globalState.js";
import copySvgSrc from "/copy.svg";

export function createCopyButton(target) {
  const imageElement = document.createElement("img");
  imageElement.src = copySvgSrc;

  const copyTextButton = document.createElement("button");
  copyTextButton.append(imageElement);

  async function handleCopy() {
    const textToCopy = target === "translate"
      ? globalState.textToTranslate
      : globalState.translatedText;

    await navigator.clipboard.writeText(textToCopy);
  }

  copyTextButton.addEventListener("click", handleCopy);

  return copyTextButton;
}



