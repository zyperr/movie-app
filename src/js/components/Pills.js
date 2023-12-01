export const Pills = (genres) => {
    const pills = document.createElement("span");
    pills.classList.add("pills");
    pills.textContent = genres;

    return pills
}