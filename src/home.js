import restaurantImg from "./photo_2025-09-23_13-21-21.jpg";
export default function loadHome() {
    const content = document.querySelector("#content");
    content.textContent = "";
    //  first Heading
    const firstHeading = document.createElement("h1");
    firstHeading.textContent = "Welcome to my Restaurant page";
    // image
    const image = document.createElement("img");
    image.src = restaurantImg;
    image.alt = "image of restaurant";
    // paragraph
    const para = document.createElement("p");
    para.textContent = "At my restaurant we serve the finest dishes crafted with love , fresh ingredient and a touch of creativity";

    //  add them to content
    content.appendChild(firstHeading);
    content.appendChild(image);
    content.appendChild(para);
}

