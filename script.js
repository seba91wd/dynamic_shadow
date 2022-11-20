// ----------------------------------------------------------------
// VARIABLES

// Mesure la hauteur de la fenêtre du navigateur.
let window_height = window.innerHeight
// console.log('window hauteur = ' + window_height + 'px')

// Mesure la largeur de la fenêtre du navigateur.
let window_width = window.innerWidth
// console.log('window largeur = ' + window_width + 'px')

// Appelle de la classe "myShadow"
let myShadow = document.getElementsByClassName('myShadow')

// Couleur des l'ombres
const shadow_color = '#ff7848'

// Taille des ombres
const shadow_size = '12px'

// Flou des ombres
const shadow_blur = '2px'

// ----------------------------------------------------------------
// EVENEMENTS

document.addEventListener('mousemove', shadow_dynamique);
// ----------------------------------------------------------------
// FONCTIONS

function shadow_dynamique(event) {

    // Position en pixel
    // console.log(`position curseur: ${event.x}:${event.y}`);

    // conversion des positions en %
    let x_shadow = event.x / window_width * 100;
    let y_shadow = event.y / window_height * 100;

    // Conversion en nombre entier
    // Réglage de la taille des ombres de -10% a 10%
    x_shadow = parseInt(x_shadow / 5) - 10;
    y_shadow = parseInt(y_shadow / 5) - 10;


    // Applique la fonction sur tous les éléments.
    let i = 0
    while (i < myShadow.length){
        myShadow[i].style = 'box-shadow: ' + x_shadow + 'px ' + y_shadow +'px ' + shadow_size +' '+ shadow_blur +' '+ shadow_color;
        i++;
    }
    console.log('position curseur en X '+ x_shadow + '%')
    console.log('position curseur en Y '+ y_shadow + '%')
};
