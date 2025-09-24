export default function loadMenu() {
    const content = document.querySelector("#content");
    content.textContent = "";
    const firstHeading = document.createElement("h1");
    firstHeading.textContent = "Our Menu";
    const list = document.createElement("ul");

    const items = ["Spaghetti", "Vegetable", "Rice", "Bean", "Yam"];
    items.forEach((dish) => {
        const li = document.createElement("li");
        li.textContent = dish;
        list.appendChild(li);
    });
     content.appendChild(firstHeading);
     content.appendChild(list);
}