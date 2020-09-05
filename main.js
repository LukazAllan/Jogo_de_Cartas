var draggableElements = document.querySelectorAll(".draggable");
var droppableElements = document.querySelectorAll(".container");

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("drop", drop);
});

function dragStart(acao) {
  acao.dataTransfer.setData("id", acao.target.getAttribute('id'));
  console.log(acao.target.getAttribute('id'))
}
function dragOver(ev) {
  ev.preventDefault();
}

function drop(acao) {
  acao.preventDefault();
  var carta = acao.dataTransfer.getData("id");
  console.log(document.getElementById(carta))
  console.log(window.document.getElementById(acao.target.getAttribute('id')).innerHTML)
  acao.target.appendChild(document.getElementById(carta));
}

function sel(acao) {
  acao.dataTransfer.setData("id", acao.target.getAttribute('id'));
  console.log(acao.target.getAttribute('id'))
}
function drop(acao) {
  acao.preventDefault();
  var carta = acao.dataTransfer.getData("id");
  console.log(document.getElementById(carta))
  console.log(window.document.getElementById(acao.target.getAttribute('id')).innerHTML)
  acao.target.appendChild(document.getElementById(carta));
}