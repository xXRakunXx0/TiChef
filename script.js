fetch("articles-data.json")
  .then((response) => response.json())
  .then( data => {


    
    afficherListeArticle(data)
});

function afficherListeArticle (tableauArticles){
    tableauArticles.forEach(article => {
    console.log(article.titre);
    console.log(article.date);
    console.log(article.img);

    document.getElementById('containerCarte').innerHTML+=`
            <div class="w40 flex CarteListe marginBottom top20" data-aos="fade-right">
                <img src="${article.img}" alt="" class="w40">
                <div class="w40">
                    <h2 class="h2">${article.titre}</h2>
                    <div class="flex spaceAround top20">
                        <p>
                            ${article.date}
                        </p>
                        <p>
                            ${article.auteur}
                        </p>
                    </div>
                    <p class="top20">${article.resume}</p>
                    <a href="" class="btm2">Lire l'article</a>
                </div>
            </div>
    
    `
});

  };

//   Animation
  AOS.init();
