
// ข้อมูลตัวอย่างสัตว์ (Mockup) ต้องสำรวจและถ่ายภาพสัตว์จริงในโรงเรียนก่อนใช้เป็นข้อมูลโครงงานจริง
const animals = [
  {
    id: 1,
    name: "สุนัข",
    scientific: "Canis lupus familiaris",
    image: "./animal-หมา.jpg",
    description: "เป็นสัตว์เลี้ยงลูกด้วยนม มีขนปกคลุมร่างกาย มีสี่ขา มีหาง และเป็นสัตว์ที่มนุษย์นิยมเลี้ยงเป็นเพื่อนหรือช่วยเฝ้าบ้าน",
    classification: "Kingdom: Animalia (อาณาจักรสัตว์)\nPhylum: Chordata (สัตว์มีแกนสันหลัง)\nClass: Mammalia (สัตว์เลี้ยงลูกด้วยนม)\nOrder: Carnivora (สัตว์กินเนื้อ)\nFamily: Canidae (วงศ์สุนัข)\nGenus: Canis (สกุลสุนัข)",
    location: "บริเวณใต้อาคาร (มีซีเคร็ทอยู่บนตึกบ้าง)"
  },
  {
    id: 2,
    name: "แมว",
    scientific: "Felis catus",
    image: "./animal-เเมว.jpg",
    description: "เป็นสัตว์เลี้ยงลูกด้วยนม มีขนปกคลุมร่างกายและมีสี่ขา",
    classification: "Kingdom: Animalia (อาณาจักรสัตว์)\nPhylum: Chordata (สัตว์มีแกนสันหลัง)\nClass: Mammalia (สัตว์เลี้ยงลูกด้วยนม)\nOrder: Carnivora (สัตว์กินเนื้อ)\nFamily: Felidae (วงศ์แมว)\nGenus: Felis (สกุลแมว)\nSpecies: Felis catus (แมวบ้าน)",
    location: "บ้านลุงไหว่, ตึกฉัตราภิเษก"
  }
];

const animalList = document.getElementById("animal-list");
const animalSearch = document.getElementById("animal-search");
const animalCount = document.getElementById("animal-count");
const emptyMessage = document.getElementById("empty-message");
const animalModal = document.getElementById("animal-modal");

function renderAnimals(data) {
  animalList.innerHTML = "";
  animalCount.textContent = `${data.length} รายการ`;
  emptyMessage.hidden = data.length !== 0;

  data.forEach(animal => {
    const card = document.createElement("article");
    card.className = "plant-card";

    const img = document.createElement("img");
    img.src = animal.image;
    img.alt = animal.name;
    img.loading = "lazy";

    img.onerror = () => {
      img.replaceWith(createImagePlaceholder());
    };

    card.appendChild(img);

    const info = document.createElement("div");
    info.className = "plant-card-info";
    info.innerHTML = `
      <h3>${escapeHTML(animal.name)}</h3>
      <p><i>${escapeHTML(animal.scientific)}</i></p>
      <button type="button" class="view-button">ดูรายละเอียด</button>
    `;

    info.querySelector("button").addEventListener("click", () => {
      showAnimalDetail(animal);
    });

    card.appendChild(info);
    animalList.appendChild(card);
  });
}

function createImagePlaceholder() {
  const placeholder = document.createElement("div");
  placeholder.className = "image-placeholder";
  placeholder.textContent = "🐾";
  placeholder.style.height = "220px";
  placeholder.style.display = "flex";
  placeholder.style.alignItems = "center";
  placeholder.style.justifyContent = "center";
  placeholder.style.fontSize = "45px";
  placeholder.style.background = "#e5efdf";
  return placeholder;
}

function showAnimalDetail(animal) {
  const image = document.getElementById("detail-image");

  image.onerror = () => {
    image.hidden = true;
  };

  image.src = animal.image || "";
  image.hidden = !animal.image;

  document.getElementById("detail-name").textContent = animal.name;
  document.getElementById("detail-scientific").textContent = animal.scientific;
  document.getElementById("detail-description").textContent = animal.description;
  document.getElementById("detail-classification").textContent = animal.classification;
  document.getElementById("detail-location").textContent = animal.location;

  animalModal.classList.add("show");
  animalModal.setAttribute("aria-hidden", "false");
}

function closeAnimalModal() {
  animalModal.classList.remove("show");
  animalModal.setAttribute("aria-hidden", "true");
}

animalSearch.addEventListener("input", () => {
  const keyword = animalSearch.value.trim().toLocaleLowerCase("th");

  renderAnimals(animals.filter(animal =>
    `${animal.name} ${animal.scientific}`
      .toLocaleLowerCase("th")
      .includes(keyword)
  ));
});

document.getElementById("modal-close").addEventListener("click", closeAnimalModal);

animalModal.addEventListener("click", event => {
  if (event.target === animalModal) closeAnimalModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeAnimalModal();
});

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

renderAnimals(animals);
