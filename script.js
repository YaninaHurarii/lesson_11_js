/* 1. Додати новий абзац по кліку на кнопку:

По кліку на кнопку <button id="btn-click">Click Me</button>, створіть новий елемент <p> з текстом "New Paragraph" і додайте його до розділу <section id="content"> */


const section1 = document.createElement("section");
section1.id = "content";
document.body.append(section1);

const btn = document.createElement("button");
section1.append(btn);
btn.id = "btn-click";
btn.textContent = "Click Me";
// const btn = document.getElementById("btn-click");

btn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "New Paragraph";
  section1.append(p);
});

console.log(btn);





/* 2.  Додати новий елемент форми із атрибутами:
Створіть кнопку з id "btn-input-create", додайте її на сторінку в section перед footer.
По кліку на створену кнопку, створіть новий елемент <input> і додайте до нього власні атрибути, наприклад, type, placeholder, і name. та додайте його під кнопкою.  */


const section2 = document.createElement("section");
section2.id = "input-content";
document.body.append(section2);

const button = document.createElement('button');
section2.append(button);
button.id = "btn-input-create";
button.textContent = 'onclick';

button.addEventListener('click', () => {
  const form = document.createElement('form');
  section2.append(form);
  const input = document.createElement("input");
  form.append(input);
  console.dir(input);
  input.type = 'text';
  input.placeholder = "text";
  input.name = 'test'

});

const footer = document.createElement("footer");
const footerParagraph = document.createElement("p");
footerParagraph.textContent = "footer text";
footer.append(footerParagraph);
document.body.append(footer);

