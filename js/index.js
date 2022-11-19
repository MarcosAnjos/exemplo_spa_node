// Mapeamento de rota
const routes = {
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    "/404": "pages/404.html"
}



handle()

window.onpopstate = () => handle() // essa função para funcionar a navegação do navegador setas
window.route = () => route() // executar essa funçao para disparar a função router
