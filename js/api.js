function traerMultiples() {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            let articleHTML = ''

            for (let i = 0; i < res.results.length; i++) {
                articleHTML += `
                    <div class="article">
                        
                        <div class="article-columnas">
                            <div class="datos-opinion">
                            <img src="${res.results[i].picture.large}" alt="imagen del usuario">
                                <h4> ${res.results[i].name.first} ${res.results[i].name.last}</h4>
                                <h5> ${res.results[i].location.country}</h5>
                            </div>
                            <div class="texto-opinion">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ad pariatur vel aperiam cumque? Placeat quos porro laudantium temporibus hic assumenda dolorum atque numquam natus ullam, dignissimos voluptatum doloribus quaerat optio iste in!</p>
                            </div>
                        </div>
                    </div>
                `
            }

            opiniones.innerHTML = articleHTML
        })
        .catch(error => console.log("Ocurrió un error", error))
}

traerMultiples(); // Llamo a la función