 // Para los botones de la lista de musica

 var listadecanciones = document.querySelectorAll(".listadecanciones").length;
 var botonesDeReproduccion = document.querySelectorAll(".botonreproduccion").length;
 var musica = new Audio("musica/Poeta-Chino&Nacho.mp3");
 var artistaSonando = "Chino & Nacho."
 var musicaSonando = false;

 for (var i = 0; i < listadecanciones; i++) {
   document.querySelectorAll(".listadecanciones")[i].addEventListener("click", function() {
     var clickInnerHTML = this.innerHTML;
     detectaClick1(clickInnerHTML);
   });
 }
 //AQUI EMPIENZAN TODAS LAS FUNCIONES DEL CODIGO 📝
 //PARA LA LISTA DE REPRODUCCION
 function detectaClick1(click) {
   switch (click) {
     case "1. Chino &amp; Nacho - Poeta.":
       if (musicaSonando === true) {
         musica.pause();
       }
       creacionMusica("Poeta-Chino&Nacho.mp3");
       cambiarCancion("#1A120B, #D5CEA3", "Poeta", "Chino & Nacho.", "imagenes/chinoynacho.jpg");
       desactivoBotonAtras();
       break;

     case "2. Melendi - Desde que estamos juntos.":
       if (musicaSonando === true) {
         musica.pause();
       }
       creacionMusica("Melendi.mp3");
       cambiarCancion("#0A2647,#EAFDFC", "Desde que estamos juntos.", "Melendi", "imagenes/melendi.jpg");
       cambioDeFondoMelendi();
       document.querySelectorAll(".botonreproduccion")[0].classList.remove("atras");
       break;
     case "3. Cuarteto de nos - Enamorado tuyo.":
       if (musicaSonando === true) {
         musica.pause();
       }
       creacionMusica("cuartetodenos.mp3");
       cambiarCancion("#F48B29,#8C0000", "Cuarteto de nos.", "Cuarteto de nos", "imagenes/cuarteto de nos.jpg");
       desactivoBotonDeAdelante();
       document.querySelectorAll(".botonreproduccion")[0].classList.remove("atras");
       break;
     default:
   }
 }
 //HASTA AQUI LLEGAN LAS FUNCIONES PARA EL FUNCIONAMIENTO DEL REPRODUCTOR PARTE 1🚩🚩
 function cambiarCancion(fondo, cancion, artista, caratula) {
   artistaSonando = artista;
   document.querySelector("body").style.background = "linear-gradient(" + fondo + ")";
   document.querySelector("h1").innerHTML = cancion;
   document.querySelector("h3").innerHTML = artista;
   document.querySelector("img").setAttribute("src", caratula);
   document.querySelectorAll(".botonreproduccion")[1].innerHTML = '<i class="fa-solid fa-pause"></i>';

   if (artista === "Melendi") {
     cambioDeFondoMelendi();
   } else if (artista === "Chino & Nacho.") {
     desactivoBotonAtras();
   } else {
     desactivoBotonDeAdelante();

   }

 }

 function creacionMusica(artista) {
   musica = new Audio("musica/" + artista);
   musica.play();
   musicaSonando = true;
 }
 //HASTA AQUI LLEGAN LAS FUNCIONES PARA EL FUNCIONAMIENTO DEL REPRODUCTOR PARTE 1🚩🚩
 // PARA LOS BOTONES DE REPRODUCCION

 for (var i = 0; i < botonesDeReproduccion; i++) {
   document.querySelectorAll(".botonreproduccion")[i].addEventListener("click", function(e) {
     var click2InnerHTML = this.innerHTML;
     detectoClick2(click2InnerHTML);
     detectoSMelendi(click2InnerHTML);
   });
 }

 function detectoClick2(click) {
   switch (click) {
     case '<i class="fa-solid fa-play"></i>':
       if (musicaSonando === false) {
         document.querySelectorAll(".botonreproduccion")[1].innerHTML = '<i class="fa-solid fa-pause"></i>';
         musica.play();
         musicaSonando = true;
       }
       break;

     case '<i class="fa-solid fa-pause"></i>':
       if (musicaSonando === true) {
         musica.pause();
         document.querySelectorAll(".botonreproduccion")[1].innerHTML = '<i class="fa-solid fa-play"></i>';
         musicaSonando = false;
       }
       break;
     default:
   }
 }

 //PARA PODER PASAR LA CANCIÓN
 function detectoSMelendi(clicks) {

   switch (clicks) {
     case '<i class="fa-solid fa-forward-step"></i>':
       if (artistaSonando === "Chino & Nacho.") {
         if (musicaSonando === false) {
           paraMelendiPlay();
         } else if (musicaSonando === true) {
           paraMelendiPause();
         }
       } else if (artistaSonando === "Melendi") {
         if (musicaSonando === false) {
           paraCuartetoPlay();
         } else if (musicaSonando === true) {
           paraCuartetoPausa();
         }
       }
       break;
     case '<i class="fa-solid fa-backward-step"></i>':
       if (artistaSonando === "Melendi") {
         if (musicaSonando === true) {
           paraChinoPausa();
         } else if (musicaSonando === false) {
           paraChinoPlay();
         }
       } else if (artistaSonando === "Cuarteto de nos") {
         if (musicaSonando === true) {
           paraMelendiPause();
           musicaSonando = true;
         } else if (musicaSonando === false) {
           paraMelendiPlay();
         }
       }
       break;
     default:
   }
 }

 // FUNCIONES PARA QUE FUNCIONE EL REPRODUCTOR PARTE 2
 function paraMelendiPlay() {
   creacionMusica("Melendi.mp3");
   musica.play();
   cambiarCancion("#0A2647,#EAFDFC", "Desde que estamos juntos.", "Melendi", "imagenes/melendi.jpg");
   musicaSonando = true;
 }

 function paraMelendiPause() {
   musica.pause();
   creacionMusica("Melendi.mp3");
   musica.play();
   cambiarCancion("#0A2647,#EAFDFC", "Desde que estamos juntos.", "Melendi", "imagenes/melendi.jpg");
 }

 function paraChinoPausa() {
   musica.pause();
   creacionMusica("Poeta-Chino&Nacho.mp3");
   musica.play();
   cambiarCancion("#1A120B, #D5CEA3", "Poeta", "Chino & Nacho.", "imagenes/chinoynacho.jpg");
   musicaSonando = true;
 }

 function paraChinoPlay() {
   creacionMusica("Poeta-Chino&Nacho.mp3");
   musica.play();
   cambiarCancion("#1A120B, #D5CEA3", "Poeta", "Chino & Nacho.", "imagenes/chinoynacho.jpg");
   musicaSonando = true;
 }

 function paraCuartetoPausa() {
   musica.pause();
   creacionMusica("cuartetodenos.mp3");
   musica.play();
   cambiarCancion("#F48B29,#8C0000", "Cuarteto de nos.", "Cuarteto de nos", "imagenes/cuarteto de nos.jpg");
 }

 function paraCuartetoPlay() {
   creacionMusica("cuartetodenos.mp3");
   musica.play();
   cambiarCancion("#F48B29,#8C0000", "Cuarteto de nos.", "Cuarteto de nos", "imagenes/cuarteto de nos.jpg");
   musicaSonando = true;
 }

 function desactivoBotonAtras() {
   document.querySelector(".cajareproductor").style.backgroundColor = "#3C2A21";
   document.querySelector(".btn").style.backgroundColor = "#3C2A21";
   document.querySelector(".btn").style.borderColor = "#3C2A21";
   document.querySelectorAll(".botonreproduccion")[0].style.backgroundColor = "#3C2A21";
   document.querySelectorAll(".botonreproduccion")[1].style.backgroundColor = "#3C2A21";
   document.querySelectorAll(".botonreproduccion")[2].style.backgroundColor = "#3C2A21";
   document.querySelectorAll(".botonreproduccion")[0].setAttribute("disabled", "");
   document.querySelectorAll(".botonreproduccion")[0].classList.add("atras");
   document.querySelectorAll(".botonreproduccion")[2].classList.remove("adelante");
   document.querySelectorAll(".botonreproduccion")[2].removeAttribute("disabled");
 }

 function desactivoBotonDeAdelante() {
   document.querySelector(".cajareproductor").style.backgroundColor = "#3C2A21";
   document.querySelector(".btn").style.backgroundColor = "#3C2A21";
   document.querySelector(".btn").style.borderColor = "#3C2A21";
   document.querySelectorAll(".botonreproduccion")[0].style.backgroundColor = "#3C2A21";
   document.querySelectorAll(".botonreproduccion")[1].style.backgroundColor = "#3C2A21";
   document.querySelectorAll(".botonreproduccion")[2].style.backgroundColor = "#3C2A21";
   document.querySelectorAll(".botonreproduccion")[0].removeAttribute("disabled");
   document.querySelectorAll(".botonreproduccion")[2].setAttribute("disabled", "");
   document.querySelectorAll(".botonreproduccion")[2].classList.add("adelante");
 }

 function cambioDeFondoMelendi() {
   document.querySelector(".cajareproductor").style.backgroundColor = "#041C32";
   document.querySelector(".btn").style.backgroundColor = "#041C32";
   document.querySelector(".btn").style.borderColor = "#041C32";
   document.querySelectorAll(".botonreproduccion")[0].style.backgroundColor = "#041C32";
   document.querySelectorAll(".botonreproduccion")[1].style.backgroundColor = "#041C32";
   document.querySelectorAll(".botonreproduccion")[2].style.backgroundColor = "#041C32";
   document.querySelector("p").style.color = "#041C32";
   document.querySelector("h1").style.fontSize = "1.5rem";
   document.querySelectorAll(".botonreproduccion")[0].removeAttribute("disabled");
   document.querySelectorAll(".botonreproduccion")[2].removeAttribute("disabled");
   document.querySelectorAll(".botonreproduccion")[0].classList.remove("atras");
   document.querySelectorAll(".botonreproduccion")[2].classList.remove("adelante");
 }

 //🚩🚩HASTA AQUI LLEGAN LAS FUNCIONES PARA QUE FUNCIONE EL REPRODUCTOR PARTE 2🚩🚩
