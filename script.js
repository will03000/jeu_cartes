var clique = 0;
var paires = 0;
var choixun;
var choixdeux;
var dos = "img/dos.jpg";
var tab = ['img/chat.jpg','img/chien.jpg','img/ane.jpg','img/lionne.jpg','img/lama.jpg','img/lapins.jpg','img/ours.jpg','img/chat.jpg','img/chien.jpg','img/ane.jpg','img/lionne.jpg','img/lama.jpg','img/lapins.jpg','img/ours.jpg'];
// variable utilises

function random(tab){ //fonction qui permet de melanger les images
    var j, x, y;
    for(y = tab.length; y; y--) { //pour i=longueur totale du tableau, i toujours vrai(sup a zero), on decremente i(on lui enleve 1).
        j = Math.floor(Math.random() * y);//Math.floor arondie a la valeur superieure,Math.random donne un nombre aleatoire (entre 0 et 1)le tout * i
        x = tab[y-1];  //decale de 1 à l'interrieur du tableau(ex:si i=13 X deviendra lionne)
        tab[y-1] = tab[j]; //si i= 13 tab 12(i-1) deviendras J(j=nombre aleatoire)
        tab[j] = x; //j deviens X(pour cette exemple x=lionne)
    }
}
random(tab);


function choisir(carte){
	if (clique == 2) {
		return;
	}
	if(clique == 0){
		choixun = carte;
		document.images[carte].src = tab[carte];
		clique = 1;
	}else{
		clique = 2;
		choixdeux = carte;
		document.images[carte].src = tab[carte];
		timer = setInterval("verif()",500);
	}
	
}

function verif() { // Vérifie si une paire a été faite
	clearInterval(timer);
	clique = 0;
	if (tab[choixdeux] == tab[choixun]) {
		paires++;
		document.getElementById("paires").innerHTML = paires;
		document.images[choixun].removeAttribute('onclick');
		document.images[choixun].style.opacity = '0.3';
		document.images[choixun].style.cursor = 'not-allowed';
		document.images[choixdeux].removeAttribute('onclick');
		document.images[choixdeux].style.opacity = '0.3';
		document.images[choixdeux].style.cursor = 'not-allowed';
	} else {
		alert('Les 2 images sont différentes...');
		document.images[choixun].src = dos;
		document.images[choixdeux].src = dos;
		return;
	}
	if (paires==7) {
		document.getElementById("mosaique").style.display = 'block';
		document.getElementById("mosaique").style.flexDirection = 'column';
		document.getElementById('mosaique').innerHTML = '<h1> Vous avez gagné !</h1><br /><input type="button" class="restart" value="Recommencer" onClick="window.location.reload()">';
	}
}