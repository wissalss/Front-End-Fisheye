//CREATION ELEMENTS DOM POUR LA LIGHTBOX

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);


//CREATION DES BOUTONS LIGHTBOX

function createIconeLightboxDom() {

    const iconePrecedent = document.createElement("i");
    iconePrecedent.className = "fas fa-chevron-left";
    iconePrecedent.id = "precedent";
    iconePrecedent.setAttribute("onclick", "mediaNav(-1)");
    iconePrecedent.setAttribute("aria-label", "image précédente");
    lightbox.appendChild(iconePrecedent);

    const iconeSuivant = document.createElement("i");
    iconeSuivant.className = "fas fa-chevron-right";
    iconeSuivant.setAttribute("onclick", "mediaNav(1)");
    iconeSuivant.id = "suivant";
    iconeSuivant.setAttribute("aria-label", "image suivante");
    lightbox.appendChild(iconeSuivant);

    const iconeClose = document.createElement("i");
    iconeClose.className = "fas fa-times";
    iconeClose.id = "close";
    iconeClose.setAttribute("aria-label", "fermer la lightbox");
    lightbox.appendChild(iconeClose);
    iconeClose.addEventListener("click", close);

}



// CREATION IMAGE ET TITRE LIGHTBOX

function createMediaLightboxDom(data) {

    const mediaLightbox = document.createElement('div');
    mediaLightbox.className = "lightbox_media";
    const lien = document.createElement("a");

    const { title, image, video } = data

    if ("video" in data) {
        const photoVideo = document.createElement("video");
        const mp4 = `assets/images/${video}`;
        const source = document.createElement("source");

        photoVideo.setAttribute("controls", " ");
        lien.setAttribute("href", mp4);
        source.setAttribute("src", mp4);
        source.setAttribute("alt", title);
        source.setAttribute("type", "video/mp4");
        photoVideo.appendChild(source);
        lien.appendChild(photoVideo);
        mediaLightbox.appendChild(lien);
    } else {
        const img = document.createElement("img");
        const photo = `assets/images/${image}`;
        lien.setAttribute("href", photo);
        img.setAttribute("src", photo);
        img.setAttribute("alt", "photo" + " " + title);
        lien.appendChild(img);
        mediaLightbox.appendChild(lien);
    }

    const titrePhotoLightbox = document.createElement("h3");
    titrePhotoLightbox.className = "titreLightbox";
    titrePhotoLightbox.textContent = title;

    lightbox.appendChild(mediaLightbox);
    mediaLightbox.appendChild(titrePhotoLightbox);
}



function mediaFactory(data) {

    function getUserMediaDOM() {

        //........CREATION ELEMENTS DOM DE LA PAGE DU PHOTOGRAPHE...........
        const { image, video, title, likes, date, id } = data;

        const carteMedia = document.createElement("article");
        carteMedia.classList.add("carte_media");
        carteMedia.setAttribute("title", "Permet d'ouvrir une lightbox");


        if ("video" in data) {
            const photoVideo = document.createElement("video");
            const mp4 = `assets/images/${video}`;
            const source = document.createElement("source");

            photoVideo.setAttribute("tabindex", "4");
            photoVideo.setAttribute("controls", " ");
            source.className = "mediaImg";
            source.setAttribute("src", mp4);
            source.setAttribute("alt", title);
            source.setAttribute("type", "video/mp4");

            carteMedia.appendChild(photoVideo);
            photoVideo.appendChild(source);
        } else {
            const img = document.createElement("img");
            const photo = `assets/images/${image}`;

            img.setAttribute("tabindex", "4");
            img.setAttribute("src", photo);
            img.setAttribute("alt", "photo" + " " + title);
            img.className = "mediaImg";

            carteMedia.appendChild(img);
        }

        const infoPhoto = document.createElement("div");
        const h2 = document.createElement("h2");
        const nbreLike = document.createElement("span");
        const spanCoeur = document.createElement("span");
        const coeur = document.createElement("i");

        infoPhoto.classList.add("info_photo");
        h2.textContent = title;
        nbreLike.textContent = likes;
        nbreLike.setAttribute("aria-label", likes + "like ");
        nbreLike.setAttribute("tabindex", "4");
        spanCoeur.className = "coeur";
        coeur.className = "fas fa-heart";
        coeur.setAttribute("aria-label", "icone coeur cliquable");
        coeur.setAttribute("tabindex", "4");

        spanCoeur.appendChild(coeur);
        infoPhoto.appendChild(h2);
        infoPhoto.appendChild(nbreLike);
        infoPhoto.appendChild(spanCoeur);
        carteMedia.appendChild(infoPhoto);

        return carteMedia;
    }
    return { getUserMediaDOM }

}


function bandeau() {

    const bandeauHtml = document.querySelector(".bandeau");
    const like = document.createElement("h4")
    const coeurb = document.createElement("i");
    const prix = document.createElement("h4");

    like.id = "total_likes";
    coeurb.className = "fas fa-heart";
    prix.id = "prix";

    bandeauHtml.appendChild(like);
    bandeauHtml.appendChild(coeurb);
    bandeauHtml.appendChild(prix);
    return bandeauHtml;
}

bandeau();