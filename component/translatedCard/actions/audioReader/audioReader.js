import styles from "./audioReader.module.css";
import { globalState } from "../../../../globalState.js";
import audioSvgSrc from "/sound_max_fill.svg";

const imageElement = document.createElement("img");
imageElement.src = audioSvgSrc;

export const audioReaderButton = document.createElement("button");
audioReaderButton.append(imageElement);

function readAudio() {
  const speech = new SpeechSynthesisUtterance();
  speech.text = globalState.translatedText;

  speechSynthesis.speak(speech);
}

audioReaderButton.addEventListener("click", readAudio)


