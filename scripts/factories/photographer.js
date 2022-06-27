//...............PAGE D'ACCUEIL.............
function photographerFactory(data) {

    function getUserCardDOM() {
        const { portrait, name, city, country, tagline, price, id } = data;
        const picture = `assets/photographers/${portrait}`;


        const article = document.createElement("article");
        article.setAttribute("title", "Détail du photographe");
        article.setAttribute("tabindex", "2")

        const profillien = document.createElement("a");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");

        profillien.setAttribute("href", `photographer.html?id=${id}`);

        img.setAttribute("src", picture);
        img.setAttribute("alt", "photo de photographe");
        h2.textContent = name;
        h2.setAttribute("aria-label", name);
        h3.textContent = city + ", " + country;
        h4.textContent = tagline;
        p.textContent = price + "€/jour";

        profillien.appendChild(img);
        profillien.appendChild(h2);

        article.appendChild(profillien);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);
        return (article);
    }
    return { getUserCardDOM }
}