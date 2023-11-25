import styles from "./audioReader.module.css";

import audioSvgSrc from "/sound_max_fill.svg";

const imageElement = document.createElement("img");
imageElement.src = audioSvgSrc;

export const audioReaderButton = document.createElement("button");
audioReaderButton.append(imageElement);


