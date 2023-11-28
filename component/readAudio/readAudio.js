import { globalState } from "../../globalState.js";
import { createButton } from "../button/button.js";
import audioSvgSrc from "/sound_max_fill.svg";

export function createReadAudioButton(target) {
  const readAudioButton = createButton(audioSvgSrc);

  function readAudio() {
    const speech = new SpeechSynthesisUtterance();
    speech.text = target === "translate"
      ? globalState.textToTranslate
      : globalState.translatedText;

    speechSynthesis.speak(speech);
  }

  readAudioButton.addEventListener("click", readAudio);

  return readAudioButton;
}

