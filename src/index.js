let a = "Hello World";

document.getElementById("app").innerHTML = a + "!! <br /><br />";

document.getElementById("app").innerHTML =
  document.getElementById("app").innerHTML + "Dalsi text";

let x = 2;
let y = 7;

document.getElementById("vysledek").innerHTML =
  "vysledek je: " +
  (x + y); /*
var promenna = prompt('Zadej cislo!');

alert(+promenna + 100);
*/

/*var year = prompt('Ve kterém roce jses narodil?');

if (year < 1989)
  alert ('Bylo ti třicet');
else 
  alert('Bude ti třicet');

var osmnact = confirm('Bylo vám už osmnact?');
alert(osmnact);*/

/*var cislo = 18;
var osmnact;

if (cislo < 18) 
  osmnact = 'yay';
else
  osmnact = 'nay';

document.getElementById("cislo").innerHTML = osmnact;

osmnact = (cislo < 18) ? false : true;

document.getElementById("cislo").innerHTML = document.getElementById("cislo").innerHTML + osmnact;

*/ function OdectiTri(
  x
) {
  return +x - 3;
}
alert(OdectiTri);
