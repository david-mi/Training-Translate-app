import styles from "./button.module.css";

export function createButton(svgSrc, textContent) {
  const imageSvg = document.createElement("img");
  imageSvg.src = svgSrc;

  const button = document.createElement("button");
  button.classList.add(styles.button);
  button.append(imageSvg);

  if (textContent) {
    const spanElement = document.createElement("span");
    spanElement.innerText = textContent;
    button.append(spanElement);
  }

  return button;
}