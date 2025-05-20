// Récupérer les produits depuis l'API Fake Store
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    afficherRecette(data);
  });

// role : afficher les recettes
//parametre : du tableau de recette
//return : rien

function afficherRecette (tableauRecette){



tableauRecette.forEach((recette) => {
  //Je reconstruit le tableau d'ingredients
  let ingrediant = "";

  recette.ingredients.forEach((ing) => {
    ingrediant += `<li> ${ing.quantite},${ing.aliment}, ${ing.unite} </li>`;
  });
  //Pareil pour les etapes
  let etape = "";
  recette.etapes.forEach((etapes) => {
    etape += `<li>${etapes.descEtape}</li>`;
  });

  document.getElementById(
    "CarteParrant"
  ).innerHTML += `<section class="Shadow container padding20 top20">
            <div class="flex Gap alignCenter w30">
                <h2 class="Orenge">${recette.nom}</h2>
                <a href=""><img src="asset/like.png" alt="" class="rond"></a>
                <a href=""><img src="asset/share.png" alt="" class="rond"></a>
            </div>
            <div class="flex spaceBetween">
                <div class="top20 w25 small">
                    <div class="flex spaceBetween alignCenter">
                        <div class="w100 top20">
                            <img src="${recette.img}" alt="" class="w100 image">
                            <div class="bgcOrenge">
                                <p class="White">${recette.nom}</p>
                            </div>
                        </div>
                    </div>
                    <div class="top20 flex Gap2">
                        <img src="${recette.img[1]}" alt="" class="w30 image2">
                        <img src="${recette.img[2]}" alt="" class="w30 image2">
                        <img src="${recette.img[3]}" alt="" class="w30 image2">
                    </div>
                </div>
                <div class="w25 small ">
                    <div class="flex Orenge Gap SBT TP20">
                        <div class="flex spaceAround">
                            <img src="asset/nombre-icone.png" alt="" >
                            <p>${recette.portions}</p>
                        </div>
                        <div class="flex spaceAround">
                            <img src="asset/cuisson-icone.png" alt="" >
                            <p>${recette.tempCuisson}</p>
                        </div>
                        <div class="flex spaceAround">
                            <img src="asset/duree-icone.png" alt="" >
                            <p>${recette.tempPreparation}</p>
                        </div>
                    </div>
                    <div>
                        <h3 class="Orenge top20">Details</h3>
                        <p class="Orenge top20">${recette.desc}</p>
                    </div>
                    <div>
                        <h3 class="Orenge top20">Ingredients</h3>
                        <ul class="TP20">
                            ${ingrediant}
                        </ul>
                    </div>
                </div>
                <div class="w40 small">
                    <h3 class="Orenge TP20">Étapes</h3>
                    <ul class="top20">
                        ${etape}
                    </ul>
                </div>
            </div>
        </section>
      
      `
});
}


