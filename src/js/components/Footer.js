import { Icons } from "../icons/Icons.js"
const {linkedinIcon,githubIcon,discordIcon} = Icons


export const Footer =() => {
    const sectionsNodo = []
    const linkNodos = []	
    const footer = document.createElement('footer')
    footer.classList.add("footer")

    for (let index = 0; index < 3; index++) {
        const section = document.createElement('section')

        sectionsNodo.push(section)
    }
    for (let index = 0; index < 5; index++) {
        const a = document.createElement('a')
        a.setAttribute("target", "_blank")
        linkNodos.push(a)
    }
    const linkedin = linkNodos[0]
    linkedin.innerHTML = linkedinIcon
    linkedin.setAttribute("href", "https://www.linkedin.com/in/maximiliano-vera-85571a248/")
    const github = linkNodos[1]
    github.innerHTML = githubIcon
    github.setAttribute("href", "https://github.com/zyperr")

    const discord = linkNodos[2]
    discord.setAttribute("href", "#")

    discord.innerHTML = discordIcon

    const tmdb = linkNodos[3]
    tmdb.textContent = "TMDB"
    tmdb.setAttribute("href", "https://www.themoviedb.org/")
    
    const yesIcon = linkNodos[4]
    yesIcon.textContent = "YesIcon"
    yesIcon.setAttribute("href", "https://yesicon.app")

    const p = document.createElement('p')
    p.textContent = "© All rights reserved"

    const footerCopyright = sectionsNodo[0]
    footerCopyright.classList.add('footer__copyright')
    footerCopyright.appendChild(p)
    const footerSocial = sectionsNodo[1]
    
    footerSocial.classList.add('footer__social')
    footerSocial.appendChild(linkedin)
    footerSocial.appendChild(github)
    footerSocial.appendChild(discord)

    const footerApi = sectionsNodo[2]
    footerApi.classList.add('footer__api')
    footerApi.appendChild(tmdb)
    footerApi.appendChild(yesIcon)
    
    footer.appendChild(footerCopyright)
    footer.appendChild(footerSocial)
    footer.appendChild(footerApi)

    return footer
}
`
<footer class="footer">
<section class="footer__copyright">
  <p>© All rights reserved</p>
</section>
<section class="footer__social">
  <a href="https://github.com/zyperr" target="_blank">GitHub</a>
  <a href="https://twitter.com/zyperr" target="_blank">Twitter</a>
  <a href="https://www.linkedin.com/in/zyperr/" target="_blank">LinkedIn</a>
  <a href="https://discord.com/users/zyperr" target="_blank">Discord</a>
</section>
<section class="footer__api">
  Api
  <a href="https://www.themoviedb.org/documentation/api" target="_blank">The movie db</a>
</section>
</footer>
`