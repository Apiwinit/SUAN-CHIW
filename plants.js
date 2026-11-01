// ข้อมูลตัวอย่าง (Mockup) รอลงพื้นที่สำรวจและถ่ายภาพพืชจริง
const plants = [
  {
    id: 1,
    name: "รอลงพื้นที่สำรวจ",
    scientific: "ยังไม่มีข้อมูล",
    description: "รายการนี้เป็นช่องเตรียมข้อมูลสำหรับพืชที่สำรวจพบจริง กรุณาบันทึกภาพและรายละเอียดจากพื้นที่โรงเรียนก่อนเผยแพร่",
    classification: "Kingdom: Plantae (อาณาจักรพืช) — รอจำแนกเพิ่มเติม",
    location: "รอระบุตำแหน่งที่พบจริง",
    image: ""
  },
  {
    id: 2,
    name: "รอลงพื้นที่สำรวจ",
    scientific: "ยังไม่มีข้อมูล",
    description: "รายการนี้เป็นช่องเตรียมข้อมูลสำหรับพืชที่สำรวจพบจริง กรุณาบันทึกภาพและรายละเอียดจากพื้นที่โรงเรียนก่อนเผยแพร่",
    classification: "Kingdom: Plantae (อาณาจักรพืช) — รอจำแนกเพิ่มเติม",
    location: "รอระบุตำแหน่งที่พบจริง",
    image: ""
  }
];

const plantList = document.getElementById("plant-list");
const plantSearch = document.getElementById("plant-search");
const plantCount = document.getElementById("plant-count");
const emptyMessage = document.getElementById("empty-message");
const plantModal = document.getElementById("plant-modal");

function displayPlants(data) {
  plantList.innerHTML = "";
  plantCount.textContent = `${data.length} รายการ`;
  emptyMessage.hidden = data.length !== 0;

  data.forEach(plant => {
    const card = document.createElement("article");
    card.className = "plant-card";

    const image = plant.image
      ? `<img src="${escapeAttribute(plant.image)}" alt="${escapeAttribute(plant.name)}" loading="lazy">`
      : `<div class="image-placeholder" aria-label="ยังไม่มีภาพ">🌱</div>`;

    card.innerHTML = `${image}
      <div class="plant-card-info">
        <h3>${escapeHTML(plant.name)}</h3>
        <p><i>${escapeHTML(plant.scientific)}</i></p>
        <span>ดูรายละเอียด →</span>
      </div>`;
    card.addEventListener("click", () => showPlantDetail(plant));
    plantList.appendChild(card);
  });
}

function showPlantDetail(plant) {
  setDetail(plant);
  plantModal.classList.add("show");
  plantModal.setAttribute("aria-hidden", "false");
}
function closePlantModal() {
  plantModal.classList.remove("show");
  plantModal.setAttribute("aria-hidden", "true");
}
plantSearch.addEventListener("input", () => {
  const keyword = plantSearch.value.trim().toLocaleLowerCase("th");
  displayPlants(plants.filter(plant =>
    `${plant.name} ${plant.scientific}`.toLocaleLowerCase("th").includes(keyword)
  ));
});
document.getElementById("modal-close").addEventListener("click", closePlantModal);
plantModal.addEventListener("click", event => { if (event.target === plantModal) closePlantModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closePlantModal(); });

function setDetail(item) {
  const image = document.getElementById("detail-image");
  if (item.image) {
    image.src = item.image;
    image.hidden = false;
  } else {
    image.removeAttribute("src");
    image.hidden = true;
  }
  document.getElementById("detail-name").textContent = item.name;
  document.getElementById("detail-scientific").textContent = item.scientific;
  document.getElementById("detail-description").textContent = item.description;
  document.getElementById("detail-classification").textContent = item.classification;
  document.getElementById("detail-location").textContent = item.location;
}
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
}
function escapeAttribute(value) { return escapeHTML(value); }

displayPlants(plants);
