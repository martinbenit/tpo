function traerMultiples() {
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            let articleHTML = ''

            for (let i = 0; i < res.results.length; i++) {
                articleHTML += `
                    <div class="article">
                        <div class="article-columnas">
                            <div class="datos-opinion">
                            <img src="${res.results[i].picture.large}" class="img-fluid rounded-circle">
                                <h4> ${res.results[i].name.first} ${res.results[i].name.last}</h4>
                                <h5> ${res.results[i].location.country}</h5>
                            </div>
                            <div class="texto-opinion">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam aliquid minus alias quis temporibus. Reprehenderit, nulla officiis odit quod asperiores sit corporis inventore, nemo ad amet, natus alias impedit aperiam accusamus! Natus molestiae voluptatem laudantium? Ut rem facere saepe enim ipsa quasi, quis, reprehenderit excepturi in atque perferendis dolorem adipisci!</p>
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