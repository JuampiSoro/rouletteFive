'use strict';

const containerNumbers = document.querySelector("#container__numeros");
const btn = document.querySelector("#btn");
const notification = document.querySelector(".notification");

const randomNumbers = function () {
    let arr = [];
    let i = 0;

    while (i < 5) {
        let number = Math.floor(Math.random() * 37);
        if (!arr.includes(number)) {
            arr.push(number);
            i++;

        }
    }
    return arr.sort((a, b) => a - b);
}


const renderNumber = function (num, i) {



    const div = document.createElement("div");

    const red = num === 1 || num === 3 || num === 5 || num === 7 || num === 9 || num === 12 || num === 14 || num === 16 || num === 18 || num === 19 || num === 21 || num === 23 || num === 25 || num === 27 || num === 30 || num === 32 || num === 34 || num === 36 ? true : false;

    const html = `
    <p class="number animation ${num === 0 ? "bg-green" : red ? "bg-red" : "bg-black"}">${num}</p>
    `
    div.innerHTML = html;


    return div;

}

const functionality = function () {
    randomNumbers().map((number, i) => containerNumbers.append(renderNumber(number, i)));
    gsap.to(".animation", {
        opacity: 1,
        y: 5,
        stagger: 0.3
    });
}

const onClickBtn = function () {
    if (!notification.classList.contains("hide")) {
        notification.classList.add("hide");
    }

    containerNumbers.innerHTML = "";
    functionality();
}

gsap.from(btn, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "Power2.easeInOut"
})

btn.addEventListener("click", onClickBtn);



functionality();


// const string = ` 28/10/22 Facundo Roncaglia (🇦🇷 #462) 29/10)22 Alejandra Di Persia (🇦🇷#462)29/10/22 Luciano S. (🇦🇷 #462)31/10/22 Belen Palavecino (🇦🇷#462)31/10/22 Mirna Lorenzo (🇦🇷#462)01/11/22 Ojea Gabriela (🇦🇷 #462)01/11/22 Dario Lopez (🇦🇷#462)01/11/22 Pablo Consiglio (🇦🇷#462)01/11/22 Fernanda (🇦🇷#462)02/11/22 Juan Manuel (🇦🇷#462)02/11/22 Martin (🇦🇷#462)02/11/22 Carolina Blanco (🇦🇷#462)02/11/22 luciano bonahora(🇦🇷#462)03/11/22 Yas Amado (🇦🇷#462)03/11/22 Leo Streitenberger (🇦🇷#462)03/11/22 Virginia Bustos (🇦🇷 #462)03/11/22 Juan Martín Enciso (🇦🇷 #462)04/11/22 Ana Machado (🇺🇾 #462)04/11/22 Lucio Folgueras (🇦🇷 #462) 04/11/22 Carla Melina Tallón(🇦🇷 #462)04/11/22 Camila Marlia (🇦🇷 #462)04/11/22 Eugenia Amaya (🇦🇷#462)04/11/22 Micaela Alvarez (🇦🇷#462)05/11/22 Guadalupe Quintana (🇦🇷#462)05/11/22 Sol Dellagiovanna (🇦🇷 #462)05/11/22 Paula Biasizzo (🇦🇷#462)05/11/22 Lucrecia.A (🇦🇷#462)05/11/22 Clara Tommasone (#462)07/11/22 Nahuel Aguiar (🇺🇾 #462)07/11/22 Maite Raurich (🇺🇾#462)7/11/22 Carolina Luque (🇦🇷#462)08/11/22 Erica (🇦🇷#462)08/11/22 Inés Juncos (🇦🇷#462)08/11/22 Cristal (🇦🇷#462)9/11/22 Diego (🇦🇷 #462)
// 11/11/22 Candela Germanowicz (🇦🇷#462)
// 11/11/22 Gonzalo López (🇦🇷#462)
// 11/11/22 Rocio Alonso (🇦🇷 #462)
// 12/11/22 Julieta Berardo (🇦🇷#462)
// 13/11/22 Maxi D (🇦🇷#462)
// 13/11/22 Emi. R (🇦🇷#462)
// 13/11/22 Francisco Silva (🇦🇷#462)
// 13/11/22 Carolina Radovitzky (🇦🇷#462)
// 13/11/22Juli I(🇦🇷#462)
// 14/11/22 Joaquin Valles (🇺🇾#462)
// 14/11/22 Vale Demartini (🇦🇷#462)
// 14/11/22 Fla Demartini (🇦🇷#462)
// 14/11/22 Jaz Abudi (🇦🇷#462)
// 15/11/22 Gabi Amat (🇦🇷#462)
// 16/11/22 juan Ignacio Vaccaro (🇦🇷#462)
// 17/11/22 Flor (🇦🇷#462)
// 17/11/22 Pablo (🇦🇷#462)
// 17/11/22 Aldana (🇦🇷#462)
// 18/11/22 Bautista Dal Masetto (🇦🇷#462)
// 18/11/22 Camila Bollonine (🇦🇷#462)
// 18/11/22 Fran Ortiz (🇦🇷#462)
// 20/11/22 Yessica Quiroga (🇦🇷 #462)
// 24/11/22 Victoria Bruzzone
// (🇦🇷#462)
// 25/11/22 Romina Alvarez (🇦🇷#462)
// 25/11/22 Florencia Nogales (🇦🇷#462)
// 26/11/22 Amira (🇦🇷#462)
// 26/11/22 Agustín(🇺🇾 #462)
// 26/11/22 Matias(🇺🇾 #462)
// 29/11/22 Ray (🇦🇷#462)
// 30/11/22 Pedro Leon (🇦🇷#462)
// 30/11/22 Aldana Rosso (🇦🇷#462)
// 01/12/22 Facundo (🇦🇷#462)
// 02/12/22 Nazareno (🇦🇷#462)
// 04/12/22 Julieta (🇦🇷#462)
// 05/12/22 Ayelen (🇦🇷#462)
// 06/12/22 Florencia Nuñez (🇦🇷#462)06/12/22 Matias Moreno (🇦🇷#462)
// 07/12/22 Matias Casado (🇦🇷#462)07/12/22 Agostina Espejo (🇦🇷#462) 08/12/22 Valentina (🇦🇷#462)08/12/22 Ayelén (🇦🇷#462)08/12/22 María Sol (🇦🇷#462)10/12/22 Constanza GIuliano  (🇦🇷#462)10/12/22 Tomas Manzanel (🇦🇷#462)14/12/22 Juli Giménez (🇦🇷#462)14/12/22 Lucas Echeverria (🇦🇷 #462)14/12/22 Rene y Yani (🇦🇷#462)14/12/22 Paula Ferreyra (🇦🇷 #462)14/12/22    15/12/22 Fabricio Ludueña (🇦🇷 #462)15/12/22 Valentina Gieco (🇦🇷 #462)15/12/22 Juan Olivieri (🇦🇷#462)16/12/22 Luciana Rolim (🇦🇷#462)16/12/22 Maria Luz Auriti (🇦🇷#462)16/12/22 Florencia Romero  (🇦🇷#462)19/12/22 Dafna Kaplan (🇦🇷 #462)20/12/22 Gastón Cara (🇦🇷#462)20/12/22 Florencia Pardo(🇺🇾 #462)20/12/22 Chiara - Agustín (🇦🇷#462)21/12/22 Emanuel S Joaquín Biloni (🇦🇷#462)22/12/22 Camila Rasche (🇦🇷#462)23/12/22 Gabriel (🇦🇷#462)23/12/22 Luciana CM (🇦🇷#462)
// 23/12/22 Florencia (🇦🇷#462)
// 23/12/22 Ezequiel Arjona (🇦🇷#462)`
