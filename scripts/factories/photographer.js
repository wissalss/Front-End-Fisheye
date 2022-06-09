function cardFactory(data) {

    function getUserCard() {
        const { portrait, name, city, country, tagline } = data;
        const section = document.createElement("section");
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");

        section.classList = "photographerHeader";
        div.classList = "infosPhotographe";
        h2.textContent = name;
        h2.setAttribute("tabindex", "1");
        h2.setAttribute("aria-label", name);
        h3.textContent = city + ", " + country;
        h4.textContent = tagline;

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);

        const button = document.createElement("div");
        button.innerHTML = `<button class="contact_button"  aria-label = "contacter le photographe" onclick="displayModal()">Contactez-moi</button>`;

        const photoPhotographe = document.createElement("div");
        const picture = `assets/photographers/${portrait}`;
        const img = document.createElement("img");

        photoPhotographe.classList = ("photo");
        img.setAttribute("alt", "photo" + " " + name);
        img.setAttribute("src", picture);

        section.appendChild(div);
        section.appendChild(button);
        section.appendChild(img);

        document.getElementById("titre_modal").innerHTML = // je cible l'id concerné et le texte déjà inscrit
            document.getElementById("titre_modal").innerHTML + "<br/>" + data.name; //je récupère le texte qui est présent dans id titre modal et j'y ajoute un retour à la ligne et le nom du photographe concerné

        return section;
    }
    return { getUserCard }
}