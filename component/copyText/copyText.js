import { globalState } from "../../globalState.js";
import copySvgSrc from "/copy.svg";
import { createButton } from "../button/button.js";

export function createCopyButton(target) {
  const copyTextButton = createButton(copySvgSrc);

  async function handleCopy() {
    const textToCopy = target === "translate"
      ? globalState.textToTranslate
      : globalState.translatedText;

    await navigator.clipboard.writeText(textToCopy);
  }

  copyTextButton.addEventListener("click", handleCopy);

  return copyTextButton;
}
