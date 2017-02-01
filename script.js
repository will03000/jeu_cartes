var clique = 0;
var paires = 0;
var choixun;
var choixdeux;
var norepeat = true;//empeche le chrono de se repeter
var dos = "img/dos.jpg";
var tab = ['img/exodia.jpg','img/celte.jpg','img/magicien.jpg','img/crane.jpg','img/dragonblanc.jpg','img/dragonrouge.jpg','img/obelisk.jpg','img/exodia.jpg','img/celte.jpg','img/magicien.jpg','img/crane.jpg','img/dragonblanc.jpg','img/dragonrouge.jpg','img/obelisk.jpg'];
// variable utilises

function afficherImages(){
	for(i=0;i<=tab.length-1;i++){
		document.getElementById('mosaique').innerHTML +='<img src="img/dos.jpg" class="photo" onclick="choisir('+i+')" draggable="false">'
	}
}
afficherImages();

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
	if (norepeat == true){
		timerID = setInterval("chrono()", 1000); 
		norepeat = false;
	}
	if (clique == 2) {
		return;
	}
	if(clique == 0){
		choixun = carte;
		document.images[carte].src = tab[carte];
		document.images[choixun].style.pointerEvents = 'none';
		clique = 1;
	}else{
		clique = 2;
		choixdeux = carte;
		document.images[carte].src = tab[carte];
		timer = setTimeout("verif()",500);
	}
	
}

function verif() { // Vérifie si une paire a été faite
	clique = 0;
	if (tab[choixdeux] == tab[choixun]) {
		paires++;
		document.getElementById("paires").innerHTML = paires;
		document.images[choixun].style.pointerEvents = 'none';
		document.images[choixun].style.opacity = '0.3';
		document.images[choixun].style.pointerEvents = 'none';
		document.images[choixdeux].style.opacity = '0.3';
	} else {
		document.images[choixun].src = dos;
		document.images[choixun].style.pointerEvents = 'auto';
		document.images[choixdeux].src = dos;
		return;
	}
	if (paires==7) {
		clearInterval(timerID);
		document.getElementById("mosaique").style.display = 'block';
		document.getElementById("mosaique").style.flexDirection = 'column';
		document.getElementById('mosaique').innerHTML = '<h1> Tu as gagné !</h1><br /><div id="bouton"><input id = "btnr" type="button" class="restart" value="Reviens Duelliste" onClick="window.location.reload()"></div> <img id="fin" src = "img/yugi.jpg">';
	}
}
var timerID = 0;
var sec = 0;
var min = 0; 

function chrono(){ 
	if(sec<59){
		sec++;
		if(sec<10){
			sec = "0" +sec;
		}

	}
	else if(sec=59){
		min++;
		sec = "0" + 0;
	}
	document.getElementById("chronotime").innerHTML = min + ":" + sec +"";

} 

