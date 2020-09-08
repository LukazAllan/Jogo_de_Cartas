const pers = [
  "Alborghetti", "Ariadna", "Baguncante_boy", "Bichus_Piruletus", 
  "Biladum", "Bino", "Boulos_O_Ocupador", "Caio_Ribeiro", "Carreta_furacao", 
  "Chapolim_Colorado", "Chuck_Norris", "Dava_Jonas", "Dilma_Rousseff", 
  "Dragao_de_olhos_vermelhos", "Dupla_de_estr___dores", "ecchi_angel", 
  "Escanor", "Everson_Zoio", "Favorarrow", "Fluffy", 
  "Homem_de_Ferro", "Jureg", "Loli_hamtaro", "Magrelin","Marilenus", 
  "Megumin", "Mestre_dos_Magos", "Mestre_gato", "Michael_temer", 
  "O_Grande_Hacker", "Pai_de_familia", "PF", "Sergio_moro", 
  "Serjao_Berranteiro", "Silvio_Santos", "Tio_orochi", "Tio_Phill", 
  "Torinho", "Vakinha", "waifu"
];


var p1 = [];
var p2 = [];

for (let c = 0; c < 3; c++){
  p1.push(pers[Math.floor(Math.random() * Math.floor(pers.length))]);
  p2.push(pers[Math.floor(Math.random() * Math.floor(pers.length))]);
}
console.log(window.document.getElementById('p1'));
for (let c = 0; c < 3; c++){
  let per = pers[Math.floor(Math.random() * Math.floor(pers.length))];
  let p1_html = window.document.querySelector('div#p1').innerHTML;
  window.document.querySelector('div#p1').innerHTML = p1_html + `<img class="draggable" draggable="true" id="c${1+c}p1" class="aa" src="assets/img/character/${p1[c]}-min.jpg" alt="${p1[c]}"></img>`;
}
for (let c = 0; c < 3; c++){
  let per = pers[Math.floor(Math.random() * Math.floor(pers.length))];
  let p2_html = window.document.querySelector('div#p2').innerHTML;
  window.document.querySelector('div#p2').innerHTML = p2_html + `<img class="draggable" draggable="true" id="c${1+c}p2" class="aa" src="assets/img/character/${p2[c]}-min.jpg" alt="${p2[c]}"></img>`;
}
