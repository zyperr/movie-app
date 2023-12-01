export const Pills = (genre) => {
    const pills = document.createElement("span");
    pills.classList.add("pills");
    pills.textContent = genre;

    return pills
}