var t = ['img/chat.jpg','img/chien.jpg','img/ane.jpg','img/lionne.jpg','img/lama.jpg','img/lapins.jpg','img/ours.jpg'];
// variable utilises
var oImage, oDest, i, nb = t.length;
// recuperation du conteneur
oDest = document.getElementById('mosaique');
for( i = 0; i < nb; i++){
  // creation de l'element image
  oImage = document.createElement('IMG');
  // affectation du nom de l'image
  oImage.src = t[i];
  // ajout d'un ID pour recuperation ulterieure
  oImage.id = 'image' +i;
  // ajout au conteneur

  oDest.appendChild( oImage);
}
oDest = document.getElementById('mosaique2');
for( i = 0; i < nb; i++){
  // creation de l'element image
  oImage = document.createElement('IMG');
  // affectation du nom de l'image
  oImage.src = t[i];
  // ajout d'un ID pour recuperation ulterieure
  oImage.id = 'image' +i;
  // ajout au conteneur
  
  oDest.appendChild( oImage);
}
