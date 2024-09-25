export function createNavButton(name, id) {
    const button = document.createElement("button")
    button.classList.add("button", `button--${id}`)
    button.setAttribute("data-js",`button-${id}`)
    button.textContent = `${name}`
    return button
}