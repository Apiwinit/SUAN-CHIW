
const plants = [
    {
        id: 1,
        name: " รอลงพื้นที่ ",
        scientific: "-",
        description: "-",
        classification: "- Plantae, -",
        location: "ตัวอย่าง: -",
        image: "-"
    },
    {
        id: 2,
        name: "รอลงพื้นที่",
        scientific: "-",
        description: "-",
        classification: "- Plantae, -",
        location: "ตัวอย่าง: -",
        image: "-"
    }
];

const plantList = document.getElementById("plant-list");
const plantSearch = document.getElementById("plant-search");
const plantCount = document.getElementById("plant-count");
const emptyMessage = document.getElementById("empty-message");

function displayPlants(data) {
    plantList.innerHTML = "";

    plantCount.textContent = `${data.length} รายการ`;
    emptyMessage.hidden = data.length !== 0;

    data.forEach(plant => {
        const card = document.createElement("article");
        card.className = "plant-card";

        card.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}">
            <div class="plant-card-info">
                <h3>${plant.name}</h3>
                <p><i>${plant.scientific}</i></p>
                <span>ดูรายละเอียด →</span>
            </div>
        `;

        card.addEventListener("click", () => {
            showPlantDetail(plant);
        });

        plantList.appendChild(card);
    });
}

function showPlantDetail(plant) {
    document.getElementById("detail-image").src = plant.image;
    document.getElementById("detail-name").textContent = plant.name;
    document.getElementById("detail-scientific").textContent = plant.scientific;
    document.getElementById("detail-description").textContent = plant.description;
    document.getElementById("detail-classification").textContent = plant.classification;
    document.getElementById("detail-location").textContent = plant.location;

    document.getElementById("plant-modal").classList.add("show");
}

plantSearch.addEventListener("input", () => {
    const keyword = plantSearch.value.toLowerCase();

    const filteredPlants = plants.filter(plant =>
        plant.name.toLowerCase().includes(keyword) ||
        plant.scientific.toLowerCase().includes(keyword)
    );

    displayPlants(filteredPlants);
});

document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("plant-modal").classList.remove("show");
});

document.getElementById("plant-modal").addEventListener("click", event => {
    if (event.target.id === "plant-modal") {
        event.currentTarget.classList.remove("show");
    }
});

displayPlants(plants);
