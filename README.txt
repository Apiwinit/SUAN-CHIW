SUAN-CHIW — ชุดเว็บไซต์ที่จัดระเบียบใหม่

ไฟล์ทั้งหมดอยู่ใน Root เพื่อให้เข้ากับ GitHub Pages ที่ตั้งค่าเป็น main / (root)

วิธีใช้:
1. แตกไฟล์ ZIP
2. เปิดโฟลเดอร์ SUAN-CHIW ใน VS Code
3. ตรวจสอบว่า index.html, style.css, plants.js และ animals.js อยู่ระดับเดียวกัน
4. ทดสอบ index.html ด้วย Live Server
5. อัปโหลดไฟล์ทั้งหมดไปยัง Root ของ Repository SUAN-CHIW
6. GitHub > Settings > Pages: Deploy from a branch / main / (root)

หมายเหตุ:
- หน้าพืชยังเป็นข้อมูล Mockup รอลงพื้นที่สำรวจจริง
- หน้าสัตว์มีตัวอย่างสุนัขและแมว ต้องตรวจสอบ/แทนที่ด้วยข้อมูลสำรวจจริงก่อนส่งรายงาน
- admin.html ใช้ localStorage เพื่อทดลองในเบราว์เซอร์เท่านั้น ไม่ใช่ระบบล็อกอินหรือฐานข้อมูลออนไลน์
- การซ่อนหน้า/ลิงก์ไม่ใช่การรักษาความปลอดภัย ข้อมูลในเว็บไซต์สาธารณะไม่ควรถือว่าเป็นข้อมูลลับ
- ถ้าต้องการระบบ Admin ที่เจ้าของเท่านั้นแก้ไขได้จริง ต้องเพิ่ม backend, authentication และ database พร้อมกำหนดสิทธิ์ฝั่ง server
- ภาพพื้นหลัง Hero ใช้สีไล่ระดับเป็นค่าเริ่มต้น หากต้องการภาพโรงเรียน ให้เพิ่มไฟล์ assets/images/school.jpg และเพิ่ม background-image url('assets/images/school.jpg') ใน .hero โดยอ้าง path จาก Root
