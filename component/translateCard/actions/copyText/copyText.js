import styles from "./copyText.module.css";

import copySvgSrc from "/copy.svg";

const imageElement = document.createElement("img");
imageElement.src = copySvgSrc;

export const copyTextButton = document.createElement("button");
copyTextButton.append(imageElement);
