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

// set variable active at '0' for active images 
let active = 0;
let active_info = 0;
let active_thumb = 0;

// get buttons element from the DOM
const nextButtonElement = document.querySelector('.next')
const prevButtonElement = document.querySelector('.prev')

addImages();

buttonsClick();

buttonsClickInfo();

addThumbnail();

buttonsClickThumb();




/* FUNCTIONS */

// function for add images markup to DOM
function addImages() {
   // get array's elements image and add to DOM with class active
   images.forEach((img, i) => {
      console.log(img.image);

      // select slider element from DOM 
      const imgSliderEl = document.querySelector('.images');

      // create variable with markup
      const markup = `
      <div class="img ${i === active_info ? 'active_info' : ''}">
         <h3>${img.title}</h3>
         <p>${img.text}</p>
      </div>
      <img src="./assets/${img.image}" alt="" class="img-fluid ${i === active ? 'active' : ''}">
      `

      // add images to DOM
      imgSliderEl.innerHTML += markup;
   });

}

// function for add thumbnail markup to DOM
function addThumbnail() {
   // get array's elements image and add to DOM with class active
   images.forEach((img) => {

      // select thumbnail element from DOM 
      const thumbnailEl = document.querySelector('.thumbnail_sec');

      // create variable with markup
      const markupThumb = `<img src="./assets/${img.image}" alt="">`

      console.log(markupThumb);

      // add images to DOM
      thumbnailEl.insertAdjacentHTML('beforeend', markupThumb);

   });

}

// function for buttons
function buttonsClick() {
   // Select all images 
   const imageEl = document.querySelectorAll('img')
   
  //const infoEl = document.querySelectorAll('.img')

   // Add event to prev button
   prevButtonElement.addEventListener('click', function () {
      console.log('prev');

      const image = imageEl[active];
      //const info = infoEl[active];
      console.log(image);

      // remove active class
      image.classList.remove('active');
      //info.classList.remove('active_info');


      // check if the active image value is 0
      if (active === 0) {
         active = imageEl.length - 1;
         
      } else {
         active--
      }

      // get the next image and add 'active'
      const nextImage = imageEl[active];
      //const nextInfo = infoEl[active];
      nextImage.classList.add('active');
      //nextInfo.classList.add('active_info');


   })

   // Add event to next button
   nextButtonElement.addEventListener('click', function () {
      console.log('next');

      const image = imageEl[active];
      //const infoNext = infoEl[active];
      console.log(image);

      // remove active class
      image.classList.remove('active');
      //infoNext.classList.remove('active_info');

      // check if in value of the active variable is array lenght -1 
      if (active == imageEl.length -1) {
         // if so set active image to zero
         active = 0;
      } else {
         active++
      }

      // get the next image and add 'active'
      const nextImage = imageEl[active];
      //const nextInfo = imageEl[active];

      nextImage.classList.add('active');
      //nextInfo.classList.add('active_info');

   })
}
// function for buttons
function buttonsClickInfo() {
   // Select all images 
   //const imageEl = document.querySelectorAll('img')
   
   const infoEl = document.querySelectorAll('.img')

   // Add event to prev button
   prevButtonElement.addEventListener('click', function () {
      console.log('prev');

      //const image = imageEl[active];
      const info = infoEl[active_info];
      //console.log(image);

      // remove active class
      //image.classList.remove('active');
      info.classList.remove('active_info');


      // check if the active image value is 0
      if (active_info === 0) {
         active_info = infoEl.length - 1;
         
      } else {
         active_info--
      }

      // get the next image and add 'active'
      //const nextImage = imageEl[active];
      const nextInfo = infoEl[active_info];
      //nextImage.classList.add('active');
      nextInfo.classList.add('active_info');


   })

   // Add event to next button
   nextButtonElement.addEventListener('click', function () {
      console.log('next');

      //const image = imageEl[active];
      const infoNext = infoEl[active_info];
      //console.log(image);

      // remove active class
      //image.classList.remove('active');
      infoNext.classList.remove('active_info');

      // check if in value of the active variable is array lenght -1 
      if (active_info == infoEl.length -1) {
         // if so set active image to zero
         active_info = 0;
      } else {
         active_info ++
      }

      // get the next image and add 'active'
      //const nextImage = imageEl[active];
      const nextInfo = infoEl[active_info];

      //nextImage.classList.add('active');
      nextInfo.classList.add('active_info');

   })
}
// function for thumbnail
function buttonsClickThumb() {

   // Select thumbs img 
   const thumbEl = document.querySelectorAll('.thumbnail_sec > img')

   // Add event to prev button
   prevButtonElement.addEventListener('click', function () {
      console.log('prev');

      //const image = imageEl[active];
      const thumb = thumbEl[active_thumb];
      //console.log(image);

      // remove active class
      //image.classList.remove('active');
      thumb.classList.remove('active_thumb');


      // check if the active image value is 0
      if (active_thumb === 0) {
         active_thumb = thumbEl.length - 1;
         
      } else {
         active_thumb--
      }

      // get the next image and add 'active'
      //const nextImage = imageEl[active];
      const nextThumb = thumbEl[active_thumb];
      //nextImage.classList.add('active');
      nextThumb.classList.add('active_thumb');


   })

   // Add event to next button
   nextButtonElement.addEventListener('click', function () {
      console.log('next');

      const thumbNext = thumbEl[active_thumb];

      // remove active class
      thumbNext.classList.remove('active_thumb');

      // check if in value of the active variable is array lenght -1 
      if (active_thumb == thumbEl.length -1) {
         // if so set active image to zero
         active_thumb = 0;
      } else {
         active_thumb ++
      }

      // get the next image and add 'active'
      //const nextImage = imageEl[active];
      const nextThumb= thumbEl[active_thumb];

      //nextImage.classList.add('active');
      nextThumb.classList.add('active_thumb');

   })
}
