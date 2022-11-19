import {Router} from "./router.js"

// Mapeamento de rota
const router = new Router()
router.add("/", "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contact","/pages/contact.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle() // essa função para funcionar a navegação do navegador setas
window.route = () => router.route() // executar essa funçao para disparar a função router
