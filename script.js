let botao = document.getElementById("click");
let listaTarefas = document.getElementById("listaTarefas");
let input = document.getElementById("eventoClick");

botao.addEventListener("click", function(){
  if (input.value.length == 0) {
    alert("Digite uma tarefa!")
    return (false);
  }
  
  let tarefa = document.createElement("li"); //criar o elemento da lista
  tarefa.className = "icones";
  let tarefaNova = document.createElement("p");
  tarefaNova.innerHTML = input.value;
  tarefa.appendChild(tarefaNova);
  let excluir = document.createElement("span");
  excluir.innerHTML = "x";
  tarefa.appendChild(excluir);
  listaTarefas.appendChild(tarefa);

  tarefaNova.addEventListener("click", function(){

    if(tarefaNova.style.textDecoration != "line-through") {
      tarefaNova.style.textDecoration = "line-through";
      tarefaNova.style.color = "red";
    } else {
      tarefaNova.style.textDecoration = "none";
      tarefaNova.style.color = "initial";
    }
  })
  excluir.addEventListener("click", function(){
    tarefa.parentNode.removeChild(tarefa);
  })

  let excluirtodas = document.getElementById("excluirtodas");
  excluirtodas.addEventListener("click", function(){
    listaTarefas.remove()
  })

  let selecionar = document.getElementById("selecionar");
  selecionar.addEventListener("click", function(){
  tarefa.style.textDecoration = "line-through";
  tarefa.style.color = "green";
  })

  input.value = "";
})
