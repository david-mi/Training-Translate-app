import styles from "./button.module.css";

export function createButton(svgSrc, textContent) {
  const button = document.createElement("button");
  button.classList.add(styles.button);

  if (svgSrc !== null) {
    const imageSvg = document.createElement("img");
    imageSvg.src = svgSrc;
    button.append(imageSvg);
  }

  if (textContent) {
    const spanElement = document.createElement("span");
    spanElement.innerText = textContent;
    button.append(spanElement);
  }

  return button;
}