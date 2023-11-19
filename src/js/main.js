import { Header } from "./components/Header.js";
import { Card } from "./components/Card.js";
import { Footer } from "./components/Footer.js";


const body = document.querySelector("body");
const app = document.querySelector("#app")
const trendingContainer =document.querySelector(".trending__section")
const upcomingContainer = document.querySelector(".upcoming__section")
const popularContainer = document.querySelector(".popular__section")

body.insertAdjacentElement("afterbegin", Header());
body.insertAdjacentElement("beforeend",Footer());

for(let i = 0; i < 10; i++){
    popularContainer.appendChild(Card("https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg","Oppenheimer"))
    trendingContainer.appendChild(Card("https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hFWP5HkbVEe40hrXgtCeQxoccHE.jpg","Jujutsu Kaisen"))
    upcomingContainer.appendChild(Card("https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uCRZrXZNzzDijApmREUTFywhUmW.jpg","Invencible "))
}