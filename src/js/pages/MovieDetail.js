import {Pills} from "../components/Pills.js";
import { Icons } from "../icons/Icons.js";
import { Card } from "../components/Card.js";
const {playIcon,clockIcon,bubbleChatIcon} = Icons;
const iconsList = [playIcon,clockIcon,bubbleChatIcon];
const similarMovies = [
    {
        url: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6GkKzdNosVAL7UGgwTtCHSxLQ67.jpg",
        title: "Guardianes de la Galaxia"
    },
    {
        url:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg",
        title: "Oppenheimer"
    },
    {
        url:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
        title: "Freelance"
    },
    {
        url:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/u8sLAJUvY9yzWqtVfKRQz5yin3D.jpg",
        title:"Sweet Home"
    },
    {
        url:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg",
        title: "Oppenheimer"
    },
    {
        url:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/u8sLAJUvY9yzWqtVfKRQz5yin3D.jpg",
        title:"Sweet Home"
    },
    {
        url:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/u8sLAJUvY9yzWqtVfKRQz5yin3D.jpg",
        title:"Sweet Home"
    },
    {
        url:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/u8sLAJUvY9yzWqtVfKRQz5yin3D.jpg",
        title:"Sweet Home"
    },
]
export const MovieDetail = () => {
    const genresNodos = ["aventura","accion","Ciencia Ficcion"];
    const extraInfoText = ["Ver trailer","Estrenado","Ingles"]

    const pillsNodos = genresNodos.map(genre => Pills(genre));

    const movieDetails = document.createElement("section");
    movieDetails.classList.add("movie__details");

    const movieDetailsHero = document.createElement("article");
    movieDetailsHero.classList.add("movie__details__hero");
    const  movieDetailsImg = document.createElement("picture");
    movieDetailsImg.classList.add("movie__details__img");
    const img = document.createElement("img");
    img.src = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6GkKzdNosVAL7UGgwTtCHSxLQ67.jpg";
    img.alt = "guardianes de la galaxia";

    const movieDetailsInfo = document.createElement("div");
    movieDetailsInfo.classList.add("movie__details__info");

    const movieDetailsTitle = document.createElement("h3");
    movieDetailsTitle.classList.add("movie__details__title");
    movieDetailsTitle.textContent = "Guardianes de la Galaxia";

    const movieDetailExtraInfo =   document.createElement("div")
     movieDetailExtraInfo.classList.add("movie__details__extra-info");

    const movieDetailsOverview = document.createElement("article");
    movieDetailsOverview.classList.add("movie__details__overview");
    const titleOverview = document.createElement("h3")
    titleOverview.classList.add("movie__details__title")
    titleOverview.textContent = "Overview"
    const titleSimilar = document.createElement("h3")
    titleSimilar.classList.add("movie__details__title")
    titleSimilar.textContent = "Similares"

    const Overview = document.createElement("p");
    Overview.classList.add("movie__details__description"); 
    Overview.textContent = "La querida banda de los Guardianes se instala en Knowhere. Pero sus vidas no tardan en verse alteradas por los ecos del turbulento pasado de Rocket. Peter Quill, aún conmocionado por la pérdida de Gamora, debe reunir a su equipo en una peligrosa misión para salvar la vida de Rocket, una misión que, si no se completa con éxito, podría muy posiblemente conducir al final de los Guardianes tal y como los conocemos."

    const sectionSimilar = document.createElement("section");
    sectionSimilar.className = "movie__details__similar --section-scroll" ;

    similarMovies.forEach(({url,title}) => {
        const card = Card(url,title)
        sectionSimilar.appendChild(card)
    })
    const pillsContainer = document.createElement("div")
    pillsContainer.classList.add("pills__container")
    pillsContainer.append(...pillsNodos)

    extraInfoText.forEach((element,index) => {
        const span = document.createElement("span")
        span.innerHTML = iconsList[index] + element
        movieDetailExtraInfo.appendChild(span)
    });

    movieDetailsOverview.appendChild(titleOverview)
    movieDetailsOverview.appendChild(Overview)
    movieDetailsOverview.appendChild(titleSimilar)
    movieDetailsImg.appendChild(img)
    movieDetailsHero.appendChild(movieDetailsImg)

    movieDetailsInfo.appendChild(movieDetailsTitle)
    movieDetailsInfo.append(pillsContainer)
    movieDetailsInfo.appendChild(movieDetailExtraInfo)

    movieDetailsHero.appendChild(movieDetailsInfo)
    movieDetails.appendChild(movieDetailsHero)
    movieDetails.appendChild(movieDetailsOverview)
    movieDetails.appendChild(sectionSimilar)

    return movieDetails
}
