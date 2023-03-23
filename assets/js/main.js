/* 
Consegna:
Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];

// select slider element from DOM 
const imgSliderEl = document.querySelector('.images');

// set variable active at '0' for active images 
let active = 0;

// get buttons element from the DOM
const nextButtonElement = document.querySelector('.next')
const prevButtonElement = document.querySelector('.prev')

addImages();
buttonsClick();

/* FUNCTIONS */

// function for add images markup to DOM
function addImages() {
   // get array's elements image and add to DOM with class active
   images.forEach((img, i) => {
      console.log(img.image);

      // create variable with markup
      const markup = `<img src="./assets/${img.image}" alt="" class="img-fluid ${i === active ? 'active' : ''}" >`

      console.log(markup);

      // add images to DOM
      imgSliderEl.innerHTML += markup;

   });

}

// function for buttons
function buttonsClick() {
   // Select all images 
   const imageEl = document.querySelectorAll('img')

   // Add event to prev button
   prevButtonElement.addEventListener('click', function () {
      console.log('prev');

      const image = imageEl[active]
      console.log(image);

      // remove active class
      image.classList.remove('active');

      // check if the active image value is 0
      if (active === 0) {
         active = imageEl.length - 1;
      } else {
         active--
      }

      // get the next image and add 'active'
      const nextImage = imageEl[active];
      nextImage.classList.add('active');

   })

   // Add event to next button
   nextButtonElement.addEventListener('click', function () {
      console.log('next');

      const image = imageEl[active];
      console.log(image);

      // remove active class
      image.classList.remove('active');

      // check if in value of the active variable is array lenght -1 
      if (active === imageEl.length - 1) {
         // if so set active image to zero
         active = 0;
      } else {
         active++
      }

      // get the next image and add 'active'
      const nextImage = imageEl[active];
      nextImage.classList.add('active');

   })
}
