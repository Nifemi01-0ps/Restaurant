export default function loadAbout() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const firstHeading = document.createElement("h1");
    firstHeading.textContent = "About us";

    const para = document.createElement("p");
    para.textContent = "My Restaurant was founded with one mission to bring joy through food and craft dishes that delight your taste buds";

    const note = document.createElement("p");
    note.textContent = "we can't wait to welcome you to my restaurant";

    content.appendChild(firstHeading);
    content.appendChild(para);
    content.appendChild(note);
}