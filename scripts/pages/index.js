    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        let path = "../../data/photographers.json";
        return fetch(path)
            .then(function(res) {
                return res.json()
            })
            .then(function(data) {
                return data
            })
            .catch(function(error) {
                console.info(error)
            })
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }

    init();