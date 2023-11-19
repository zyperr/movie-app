export const Card = (url,title) => {
    const article = document.createElement("article")
    article.classList.add("card__container")
    const figure = document.createElement("figure")
    figure.classList.add("card__figure")
    const img = document.createElement("img")
    img.classList.add("card__img")
    img.src = url
    const figcaption = document.createElement("figcaption")
    figcaption.classList.add("card__title")
    figcaption.textContent = title


    figure.appendChild(img)
    figure.appendChild(figcaption)
    article.appendChild(figure)


    return article
}