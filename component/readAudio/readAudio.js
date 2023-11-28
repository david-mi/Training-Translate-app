import styles from "./readAudio.module.css";
import { globalState } from "../../globalState.js";
import audioSvgSrc from "/sound_max_fill.svg";

export function createReadAudioButton(target) {
  const imageElement = document.createElement("img");
  imageElement.src = audioSvgSrc;

  const readAudioButton = document.createElement("button");
  readAudioButton.append(imageElement);

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

