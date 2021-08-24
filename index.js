let apikey = "197c1f59944b4fc3a43ae716accaa885";
let fucku = document.getElementById('fucku');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`, true);


xhr.onload = function() {

    if (this.status === 200) {

        let json = JSON.parse(this.responseText);

        let articles = json.articles;
        console.log(articles[0]["urlToImage"]);

        fucku.innerHTML = `<div class="carousel-item active">
                    <img src="${articles[0]["urlToImage"]}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5><b>${articles[0]["title"]}<\b></h5>
                        <p>${articles[0]["description"]}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="${articles[2]["urlToImage"]}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5><b>${articles[2]["title"]}</b></h5>
                        <p>${articles[2]["description"]}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="${articles[12]["urlToImage"]}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5><b>${articles[12]["title"]}</b></h5>
                        <p>${articles[12]["description"]}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="${articles[3]["urlToImage"]}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5><b>${articles[3]["title"]}</b></h5>
                        <p>${articles[3]["description"]}</p>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="${articles[4]["urlToImage"]}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5><b>${articles[4]["title"]}</b></h5>
                    <p>${articles[4]["description"]}</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="${articles[5]["urlToImage"]}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5><b>${articles[5]["title"]}</b></h5>
                    <p>${articles[5]["description"]}</p>
                </div>
            </div>
            <div class="carousel-item">
            <img src="${articles[6]["urlToImage"]}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5><b>${articles[6]["title"]}</b></h5>
                <p>${articles[6]["description"]}</p>
            </div>
        </div>
        <div class="carousel-item">
        <img src="${articles[7]["urlToImage"]}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5><b>${articles[7]["title"]}</b></h5>
            <p>${articles[7]["description"]}</p>
        </div>
    </div>
    <div class="carousel-item">
    <img src="${articles[8]["urlToImage"]}" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
        <h5><b>${articles[8]["title"]}</b></h5>
        <p>${articles[8]["description"]}</p>
    </div>
</div>
<div class="carousel-item">
<img src="${articles[9]["urlToImage"]}" class="d-block w-100" alt="...">
<div class="carousel-caption d-none d-md-block">
    <h5><b>${articles[9]["title"]}</b></h5>
    <p>${articles[9]["description"]}</p>
</div>
</div>
<div class="carousel-item">
<img src="${articles[10]["urlToImage"]}" class="d-block w-100" alt="...">
<div class="carousel-caption d-none d-md-block">
    <h5><b>${articles[10]["title"]}</b></h5>
    <p>${articles[10]["description"]}</p>
</div>
</div>
             `;


    } else {
        console.log('some error occured');
    }
}

xhr.send();

let cardinner = document.getElementById("card-inner");
const xhy = new XMLHttpRequest();
xhy.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`, true);
xhy.onload = function() {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);

        let articles = json.articles;
        console.log(articles);
        cardinner.innerHTML = `
        <div class="col">
                    <div class="card shadow-sm">
                    <img src="${articles[0]["urlToImage"]}" class="d-block w-100" alt="...">
                        <div class="card-body">
                        <h5>${articles[0]["title"]}</h5>
                            <p class="card-text">${articles[0]["content"]}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <a href="${articles[0]["url"]} target="_blank">
                                <button type="button" class="btn btn-sm btn-outline-secondary" >View</button>
                                </a>
                                </div>
                                <small class="text-muted">${articles[0]["publishedAt"]}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <img src="${articles[1]["urlToImage"]}" class="d-block w-100" alt="...">
                        <div class="card-body">
                        <h5>${articles[1]["title"]}</h5>
                            <p class="card-text">${articles[1]["content"]}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                 <a href="${articles[1]["url"]} target="_blank">
                                    <button type="button" class="btn btn-sm btn-outline-secondary" >View</button>
                                    </a>
                                </div>
                                <small class="text-muted">${articles[1]["publishedAt"]}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <img src="${articles[2]["urlToImage"]}" class="d-block w-100" alt="...">
                        <div class="card-body">
                        <h5>${articles[2]["title"]}</h5>
                            <p class="card-text">${articles[2]["content"]}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <a href="${articles[2]["url"]} target="_blank">
                                <button type="button" class="btn btn-sm btn-outline-secondary" >View</button>
                                </a>
                                </div>
                                <small class="text-muted">${articles[2]["publishedAt"]}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <img src="${articles[3]["urlToImage"]}" class="d-block w-100" alt="...">
                        <div class="card-body">
                        <h5>${articles[3]["title"]}</h5>
                            <p class="card-text">${articles[3]["content"]}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <a href="${articles[3]["url"]} target="_blank">
                                <button type="button" class="btn btn-sm btn-outline-secondary" >View</button>
                                </a>
                                </div>
                                <small class="text-muted">${articles[3]["publishedAt"]}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <img src="${articles[6]["urlToImage"]}" class="d-block w-100" alt="...">
                        <div class="card-body">
                        <h5>${articles[6]["title"]}</h5>
                            <p class="card-text">${articles[6]["content"]}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <a href="${articles[6]["url"]} target="_blank">
                                <button type="button" class="btn btn-sm btn-outline-secondary" >View</button>
                                </a>
                                </div>
                                <small class="text-muted">${articles[6]["publishedAt"]}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <img src="${articles[5]["urlToImage"]}" class="d-block w-100" alt="...">
                        <div class="card-body">
                        <h5>${articles[5]["title"]}</h5>
                            <p class="card-text">${articles[5]["content"]}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <a href="${articles[1]["url"]} target="_blank">
                                <button type="button" class="btn btn-sm btn-outline-secondary" >View</button>
                                </a>
                                </div>
                                <small class="text-muted">${articles[5]["publishedAt"]}</small>
                            </div>
                        </div>
                    </div>
                </div>`;
    } else {
        console.log('some error occured');
    }
}
xhy.send();