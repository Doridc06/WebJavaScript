/*En la página adjunta, realiza una función que cambie de colores el menú 
(Inicio, Hoteles, Nuestras tarifas, ¿Dónde estamos? y Nuestra empresa) cada 
vez que se pase por encima de ellos, se abandone el elemento o se pulse
*/

let menu = document.querySelectorAll(".efectos");

menu.forEach(function(item) {
  item.addEventListener("mouseover", function() {
    this.style.backgroundColor = "blue";
    this.style.color = "black";
  });

  item.addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.color = "";
  });

  item.addEventListener("click", function() {
    this.style.backgroundColor = "green";
    this.style.color = "black";
  });
});


/*Realiza una función que cambie la imagen de cabecera por una que tú 
elijas cuando se pase por encima de “Esta empresa es el relax” y que cargue la 
foto original cuando se abandone este texto. La imagen tendrá que ocupar el 
mismo espacio que ocupa la imagen original y no podrá estar deformada. HAY 
que utilizar querySelectorAll.*/


const textoRelax = document.querySelector("#texto-relax");
const imgCabecera = document.querySelector(".imgcabecera");

textoRelax.addEventListener("mouseover", () => {
  imgCabecera.src = "images/sol.png";
});

textoRelax.addEventListener("mouseout", () => {
  imgCabecera.src = "images/relax.jpg";
});


/*Realiza una función que a los 30 segundos pregunte si te gusta la página
y lance mensajes adecuados en el caso de que le guste o no le guste. En el caso 
de que le guste continuará en la página y en el caso de que no le guste irá a la 
página del instituto*/

setInterval(function () {
  if (confirm("¿Te gusta esta página?")) {
  } else {
    window.location.href = "https://fpiespablopicasso.es/";
  }
}, 30000);