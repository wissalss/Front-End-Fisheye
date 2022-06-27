const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");
const menuSelect = document.querySelector(".choix");

async function getPhotographers() {
    const response = await fetch("data/photographers.json");
    const data = await response.json();
    return data;
}

// HEADER DE LA PAGE DU PHOTOGRAPHE

function displayData(photographers) {

    const photographerHeader = document.querySelector(".photograph-header");
    let bandeauPrix = 0;

    photographers.forEach(photographer => {
        if (photographer.id == photographerId) {
            const photographerModel = cardFactory(photographer);
            const userCardDOM = photographerModel.getUserCard();
            photographerHeader.appendChild(userCardDOM);

            bandeauPrix = photographer.price;
            const bandeau_prix = document.getElementById("prix");
            bandeau_prix.innerHTML = bandeauPrix + "€ / jour";
        }
    });

}

// MEDIAS ET LIGHTBOX DE LA PAGE DU PHOTOGRAPHE
function displayDataMedia(medias) {

    switch (menuSelect.value) { // MISE EN PLACE DU TRIE

        case "pop":
            medias.sort(function(a, b) {
                return b.likes - a.likes;
            })
            break;

        case "date":
            medias.sort(function(a, b) {
                return new Date(b.date) - new Date(a.date);
            })
            break;

        case "titre":
            medias.sort(function(a, b) {
                return a.title.localeCompare(b.title);
            })
            break;
    }

    // TRI PAGE PHOTOGRAPHE
    const cartesMedias = document.querySelector(".cartes_medias");
    cartesMedias.innerHTML = "";


    //TRI LIGHTBOX
    const lightbox = document.querySelector(".lightbox");
    lightbox.innerHTML = "";

    let totalLikes = 0;
    let i = 0;
    medias.forEach(media => {
        if (media.photographerId == photographerId) {
            const mediaModel = mediaFactory(media);
            const userMediaDOM = mediaModel.getUserMediaDOM();
            cartesMedias.appendChild(userMediaDOM);
            createMediaLightboxDom(media);

            totalLikes += media.likes;
        }
    })
    ajoutLikes();

    let total_likes = document.getElementById("total_likes");
    total_likes.innerHTML = totalLikes;

    // CLICK SUR LA PHOTO
    let mediaArticle = document.querySelector(".cartes_medias");
    for (let i = 0; i < mediaArticle.childNodes.length; i++) {
        mediaArticle.childNodes[i].childNodes[0].addEventListener("click", function() {
                mediaLocal(i + 1);
                open();
                createIconeLightboxDom();
            })
            // CLAVIER SUR LA PHOTO
        mediaArticle.childNodes[i].childNodes[0].addEventListener("keypress", function(e) {
            if (e.key == "Enter") {
                mediaLocal(i + 1);
                open();
                createIconeLightboxDom();
            }
        });
    }

}

//  GESTION DES LIKES

function ajoutLikes() {
    const coeurs = document.querySelectorAll(".coeur");
    coeurs.forEach(e => {

        // CLICK
        e.addEventListener("click", function() {

            const nbreLike = e.parentElement.children[1];
            nbreLike.textContent++;
            let totalLikes = document.getElementById("total_likes");
            totalLikes.innerHTML++;
        });

        // CLAVIER 
        e.addEventListener("keypress", function() {
            const nbreLike = e.parentElement.children[1];
            nbreLike.textContent++;
            let totalLikes = document.getElementById("total_likes");
            totalLikes.innerHTML++;
        });
    });
}

async function display() {
    const { photographers, media } = await getPhotographers();
    displayData(photographers);
    displayDataMedia(media);

    menuSelect.onchange = function() { displayDataMedia(media) };
}
display();