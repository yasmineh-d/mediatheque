var audioActuel = null;
let paragraphe = document.getElementById("Paragrraph");
function wrina(le_Type) {
  var tt = "";
  for (let i = 0; i <= data.length - 1; i++) {
    var leNom = data[i].name;
    var leType = data[i].type;
    var leImg = data[i].img;
    var leAudio = data[i].audio;

    if (le_Type.toLowerCase() == leType.toLowerCase()) {
      tt = tt + "<div>";
      tt =
        tt +
        `<img class ="mesImage" onclick="sma3('${leAudio}')" src="${leImg}">`;
      tt += `<p class="paras"> ${leNom} </p>`;
      tt += `</div>`;
    }
  }

  document.getElementById("afficher").innerHTML = tt;

  paragraphe.style.display = "none";
}
// Fonction pour jouer un son
function sma3(sawt) {
  // Si un son est déjà en cours, on le met en pause et on le réinitialise
  if (audioActuel !== null) {
    audioActuel.pause();
    audioActuel.currentTime = 0; // Remettre à zéro la position de lecture
  }

  // Crée un nouvel objet Audio et joue le son
  audioActuel = new Audio(sawt); // Crée un objet Audio avec le fichier spécifié
  audioActuel.play(); // Joue le son
}

function Paragrraph() {
  paragraphe.style.display = "block";
  document.getElementById("afficher").innerHTML = "";
}
