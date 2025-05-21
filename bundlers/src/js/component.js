export function paragrafo(title) {
    const element = document.createElement("p")
    element.textContent = title
    document.body.appendChild(element)
}