# what I learn 
## script
* onclick แบบที่ 1 ไม่ค่อยเข้าใจวิธีเขียน function แต่สะดวกเพราะไม่ต้องไปประกาศชื่อ function ที่ html
```
let toggleBtn = document.querySelector('.toggle-btn') /*ตัวจิ้มปุ่ม bar*/ 
let toggleBtnIcon = document.querySelector('.toggle-btn i') /* จิ้มตัว icon*/ 
let dropdownMenu = document.querySelector('.dropdown-menu')

/* สรัาง func ตรวจจับการจิ้มปุ่ม bar*/
toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open') /* ไม่ค่อยแน่ใจว่า 'open' คือ class ที่มีคนสร้างไว้ให้ใช้ตรวจจับการเปิดไหม*/ 
    const isOpen = dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
```

* onclick แบบที่ 2 เป็นแบบที่เข้าใจ เพราะเรียนมาแบบนี้
```
<!-- Responsive -->
            <div class="toggle-btn " onclick="clickBtn()">
                <i class="fa-solid fa-bars"></i>
            </div>
```
```
function clickBtn() {
    let toggleBtn = document.querySelector('.toggle-btn') /*ตัวจิ้มปุ่ม bar*/ 
    let dropdownMenu = document.querySelector('.dropdown-menu')

    dropdownMenu.classList.toggle('open') /* ไม่ค่อยแน่ใจว่า 'open' คือ class ที่มีคนสร้างไว้ให้ใช้ตรวจจับการเปิดไหม*/ 
    const isOpen = dropdownMenu.classList.contains('open')

    let toggleBtnIcon = document.querySelector('.toggle-btn i') /* จิ้มตัว icon เดาว่าจิ้ม class tag*/ 
    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
```
## 'open' เพิ่มเติมว่าคืออะไร
แล้ว 'open' ใช้ทำอะไร?
โดยทั่วไป 'open' เป็นคลาสที่เราใช้ใน CSS เพื่อกำหนดสไตล์ตอนที่เมนูเปิด เช่น:

css
```
.dropdown {
  display: none;
}

.dropdown.open {
  display: block;
}
```
ในกรณีนี้:

ถ้าไม่มีคลาส ```'open'``` → เมนูจะซ่อน

ถ้ามีคลาส ```'open'```→ เมนูจะปรากฏ

สรุป:
'open' คือชื่อคลาสที่ใช้ควบคุมการแสดงผลของเมนู (เช่น dropdown) ซึ่งเราสามารถใช้มันร่วมกับ CSS และ JavaScript เพื่อจัดการแสดง/ซ่อนเมนูอย่างเป็นระบบครับ

## icon
* อยากได้ icon ไปที่ [fontawesome](https://fontawesome.com/search)
* แต่อย่าลืมวางลิ้ง CDN ไว้ที่ ```<head></head> ```
```
<!-- link cdn เพราะจะใช้ icon-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
```
* ``` <i class="fa-solid fa-bars"></i> ``` ตรง clss ถ้าอยากได้เป็น X (ปุ่มกากบาท)

    ให้เปลี่ยนไปใช้ calss ``` fa-bars ``` --> ``` fa-xmark ```

##