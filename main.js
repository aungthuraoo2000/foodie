import './style.scss'
import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";
import * as bootstrap from 'bootstrap';



let typed = new Typed('.element', {
    strings: ['Food ...',
        'Drink ...'],
    smartBackspace: true,
    loop: true,
    typeSpeed: 200,
    backSpeed: 30,
    backDelay: 1500,
});

let toDown = {
    distance: '50px',
    origin: 'top',
    opacity: 0,
    duration: 2000,
    interval: 500,
};

ScrollReveal().reveal('.to-down', toDown);

let toLeft = {
    distance: '50px',
    origin: 'right',
    opacity: 0,
    duration: 2000,
    interval: 500,
    delay: 500
};

ScrollReveal().reveal('.to-left', toLeft);

let toLeft2 = {
    distance: '50px',
    origin: 'right',
    opacity: 0,
    duration: 2000,
    interval: 500,
    delay: 1000
};

ScrollReveal().reveal('.to-left-2', toLeft2);

let toRight = {
    distance: '50px',
    origin: 'left',
    opacity: 0,
    duration: 2000,
    interval: 500,
};

ScrollReveal().reveal('.to-right', toRight);

let menus = [
    {
        id: 1,
        image: "./public/img/plate1.png",
        food: "Barbecue Salad",
        about: "Special Delicious Dish",
        currency: "$",
        price: 22.2,
    },
    {
        id: 2,
        image: "./public/img/plate2.png",
        food: "Salad with Fish",
        about: "Special Delicious Dish",
        currency: "$",
        price: 30.4,
    },
    {
        id: 3,
        image: "./public/img/plate3.png",
        food: "Spinich Salad",
        about: "Special Delicious Dish",
        currency: "$",
        price: 50,
    }
];

let menuRow = document.getElementById('menuRow');

menus.forEach(function (menu) {
    let div = document.createElement('div');
    div.classList.add("col-11","col-md-5","col-lg-2","to-left-2","shadow","rounded-3","me-md-4","mb-3");
    div.innerHTML = `
        <img src="${menu.image}" class=" d-block mx-auto mt-4 mb-3" width=" 160px" alt="">
        <p class=" fw-bold">${menu.food}</p>
        <p class=" text-black-50 small">${menu.about}</p>
        <div class=" d-flex justify-content-between align-items-center mb-3">
            <p class=" mb-0">${menu.currency} ${menu.price}</p>
            <button class=" btn btn-primary"><i class="bi bi-cart3"></i></button>
        </div>
    `;

    menuRow.append(div);
});