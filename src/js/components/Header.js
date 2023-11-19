import { menuIcon } from "../icons/Icons.js";

const rutas = ["popular", "now playing", "top rated", "upcoming"]


export const Header = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement("h1");
    logo.classList.add("header__logo");
    logo.textContent = "Movie";
    

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("header__menu-container")

    menuContainer.innerHTML = menuIcon



    const nav = document.createElement('nav');
    nav.classList.add('header__nav');

    menuContainer.addEventListener("click",()=> {
        nav.classList.toggle("active")
    })


    const ul = document.createElement('ul');
    ul.classList.add('header__ul');

    rutas.forEach(ruta => {
        const li = document.createElement('li');
        li.classList.add('header__li');
        li.textContent = ruta;
        ul.appendChild(li);
    })


    nav.appendChild(ul)
    header.appendChild(logo)
    header.appendChild(menuContainer)
    header.appendChild(nav)

    return header
}