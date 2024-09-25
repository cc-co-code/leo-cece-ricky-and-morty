export function createNavButton(name, id) {
  const footer = document.querySelector('[data-js="footer"]');
  const button = document.createElement("button");
  button.classList.add("button", `button--${id}`);
  button.setAttribute("data-js", `button-${id}`);
  button.textContent = `${name}`;
  footer.append(button);
  return button;
}
