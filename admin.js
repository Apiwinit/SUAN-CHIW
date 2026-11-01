// ตัวอย่างการบันทึกข้อมูลใน localStorage เท่านั้น ไม่ใช่ฐานข้อมูลออนไลน์หรือระบบยืนยันตัวตน
const STORAGE_KEY = "suan_chiw_records_v1";
const form = document.getElementById("record-form");
const message = document.getElementById("save-message");

form.addEventListener("submit", event => {
  event.preventDefault();
  const record = {
    id: Date.now(),
    type: document.getElementById("record-type").value,
    name: document.getElementById("record-name").value.trim(),
    scientific: document.getElementById("record-scientific").value.trim(),
    image: document.getElementById("record-image").value.trim(),
    description: document.getElementById("record-description").value.trim(),
    classification: document.getElementById("record-classification").value.trim(),
    location: document.getElementById("record-location").value.trim()
  };
  if (!record.name) return;

  let records = [];
  try { records = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
  catch { records = []; }
  records.push(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));

  message.hidden = false;
  message.textContent = "บันทึกตัวอย่างเรียบร้อยแล้ว ข้อมูลนี้อยู่ในเบราว์เซอร์เครื่องนี้เท่านั้น และยังไม่แสดงบนหน้า Plants/Animals สาธารณะ";
  form.reset();
});
