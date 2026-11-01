
// ข้อมูลตัวอย่างสัตว์ (Mockup)
// ต้องสำรวจและถ่ายภาพสัตว์จริงในโรงเรียน
// ก่อนนำมาใช้เป็นข้อมูลโครงงานจริง


const animals = [
    {
        name: "สุนัข",
        scientific: "Canis lupus familiaris",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800",
        description: "เป็นสัตว์เลี้ยงลูกด้วยนม มีขนปกคลุมร่างกาย มีสี่ขา มีหาง และเป็นสัตว์ที่มนุษย์นิยมเลี้ยงเป็นเพื่อนหรือช่วยเฝ้าบ้าน",
        classification: "Kingdom: Animalia \nPhylum: Chordata (สัตว์มีแกนสันหลัง)\nClass: Mammalia (สัตว์เลี้ยงลูกด้วยนม)\nOrder: Carnivora (สัตว์กินเนื้อ)\nFamily: Canidae (วงศ์สุนัข)\nGenus: Canis (สกุลสุนัข)",
        location: "บริเวณภายในโรงเรียน"
    },
    {
        name: "แมว",
        scientific: "Felis catus",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800",
        description: "เป็นสัตว์เลี้ยงลูกด้วยนม มีขนปกคลุมร่างกายและมีสี่ขา ที่ตึกฉัตราภิเษกมีตัวอ้วนๆอยู่ตัวหนึ่ง",
        classification: "Kingdom: Animalia \nPhylum: Chordata (สัตว์มีแกนสันหลัง)\nClass: Mammalia (สัตว์เลี้ยงลูกด้วยนม)",
        location: "บ้านลุงไหว่,ตึกฉัตราภิเษก"
    }
];


const animalList = document.getElementById("animal-list");
const animalSearch = document.getElementById("animal-search");
const animalCount = document.getElementById("animal-count");
const emptyMessage = document.getElementById("empty-message");

const modal = document.getElementById("animal-modal");
const closeButton = document.getElementById("modal-close");

function renderAnimals(data) {
    animalList.innerHTML = "";
    animalCount.textContent = data.length;

    emptyMessage.style.display = data.length === 0 ? "block" : "none";

    data.forEach((animal, index) => {
        const card = document.createElement("div");
        card.className = "plant-card";

        card.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <div class="plant-card-info">
                <h3>${animal.name}</h3>
                <p><i>${animal.scientific}</i></p>
                <button class="view-button">ดูรายละเอียด</button>
            </div>
        `;

        card.querySelector("button").addEventListener("click", () => {
            showAnimalDetail(animal);
        });

        animalList.appendChild(card);
    });
}

function showAnimalDetail(animal) {
    document.getElementById("detail-image").src = animal.image;
    document.getElementById("detail-name").textContent = animal.name;
    document.getElementById("detail-scientific").textContent = animal.scientific;
    document.getElementById("detail-description").textContent = animal.description;
    document.getElementById("detail-classification").textContent = animal.classification;
    document.getElementById("detail-location").textContent = animal.location;

    modal.classList.add("show");
}

animalSearch.addEventListener("input", () => {
    const keyword = animalSearch.value.toLowerCase();

    const filteredAnimals = animals.filter(animal =>
        animal.name.toLowerCase().includes(keyword) ||
        animal.scientific.toLowerCase().includes(keyword)
    );

    renderAnimals(filteredAnimals);
});

closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

renderAnimals(animals);
