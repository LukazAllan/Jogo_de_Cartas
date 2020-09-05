const pers = [
'_', 'Alborghetti', 'Ariadna', 
'Baguncante_boy', 'Bichus_Piruletus', 'Biladum', 
'Bino', 'Boulos_O_Ocupador', 'Caio_Ribeiro', 
'Carreta_furacao', 'Chapolim_Colorado', 'Chuck_Norris', 
'Dava_Jonas', 'Dilma_Rousseff', 'Dragao_de_olhos_vermelhos', 
'Dupla_de_estr___dores', 'ecchi_angel', 'Escanor', 
'Everson_Zoio', 'exemplo', 'Favorarrow', 
'Fluffy', 'Homem_de_Ferro', 'Jureg', 
'Loli_hamtaro', 'Magrelin', 'Marilenus', 
'Megumin', 'Mestre_dos_Magos', 'Mestre_gato', 
'Michael_temer', 'O_Grande_Hacker', 'Pai_de_familia', 
'PF', 'Sergio_moro', 'Serjao_Berranteiro', 
'Silvio_Santos', 'Tio_orochi', 'Tio_Phill', 
'Torinho', 'Vakinha', 'waifu'
];
/*
var p1 = [];
var p2 = [];

for (let c = 0; c < 5; c++){
  p1.push(pers[Math.floor(Math.random() * Math.floor(pers.length))]);
  p2.push(pers[Math.floor(Math.random() * Math.floor(pers.length))]);
}*/

document.getElementById("p1").innerHTML = `<img class="draggable" draggable="true" id="c2p1" class="aa" src="/character/Megumin-min.jpg" alt="Megumin"></img>`;
for (let c = 0; c < 5; c++){
  let per = pers[Math.floor(Math.random() * Math.floor(pers.length))];
  document.getElementById("p1").innerHTML = `<img class="draggable" draggable="true" id="c2p1" class="aa" src="/character/Megumin-min.jpg" alt="Megumin"></img>`;
}
for (let c = 0; c < 5; c++){
  let per = pers[Math.floor(Math.random() * Math.floor(pers.length))];
  document.getElementById('p2').innerHTML = window.document.getElementById('p2').innerHTML + `<img class="draggable" draggable="true" id="c2p1" class="aa" src="/character/${per}-min.jpg" alt="${per}"></img>`;
}
