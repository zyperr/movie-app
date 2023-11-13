export const Header = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement("h1");
    logo.classList.add("header__logo");
    logo.textContent = "Movie";
    
    const nav = document.createElement('nav');
    nav.classList.add('header__nav');

    const ul = document.createElement('ul');
    ul.classList.add('header__ul');

    nav.appendChild(ul)

    header.appendChild(logo)
    header.appendChild(nav)

    return header
}