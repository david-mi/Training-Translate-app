import styles from "./audioReader.module.css";
import { globalState } from "../../globalState.js";
import audioSvgSrc from "/sound_max_fill.svg";



export function createAudioReaderButton(target) {
  const imageElement = document.createElement("img");
  imageElement.src = audioSvgSrc;

  const audioReaderButton = document.createElement("button");
  audioReaderButton.append(imageElement);

  function readAudio() {
    const speech = new SpeechSynthesisUtterance();
    speech.text = target === "translate"
      ? globalState.textToTranslate
      : globalState.translatedText;

    speechSynthesis.speak(speech);
  }

  audioReaderButton.addEventListener("click", readAudio);

  return audioReaderButton;
}

