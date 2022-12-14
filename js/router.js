export class Router {
    routes = {}

    // Modelo para o Mapeamento de rota
    add(routeName, page) {
        this.routes[routeName] = page
    }

    // função para rotear 
    route(event) {
        event = event || window.event // verifica se passei um evento, senao pega da global (DOM)
        event.preventDefault() // por padrão direcionar para a pagina padrão, assim adicionamos onclick nossa rota 

        window.history.pushState({}, "", event.target.href) // pegando historio navegação que esta dentro de event , o target é quem desparou que comtem (a) mas queremos que tem detro do (a) 

        this.handle()
    }

    // Função Manipulação para pegar a rota 
    handle() {
        const { pathname } = window.location // função para pegar a rota 
        const route = this.routes[pathname] || this.routes[404] // estou direcinando para as rotas existentes, caso não seja verdadeira retorna 404
        
        // função para chamada de outros aquivos / dados FUNC ASSINCRONA
        fetch(route)
        .then(data => data.text())
        .then(html => 
            document.querySelector('#app').innerHTML = html // selecionando app para injetar codigo html
        )
        // console.log(route)
    }   
}
