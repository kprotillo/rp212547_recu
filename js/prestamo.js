
document.getElementById('formulario').addEventListener('submit', saveTask);

function datosP(){
  var monto = document.getElementById("monto").value;
  var tiempo = document.getElementById("tiempo").value;
  var interes = document.getElementById("interes").value;
  var vista= document.getElementById("datos");
  vista.innerHTML= '';
  var capitalF= 0;
  var cuota = 0;

  var nInteres = interes /100;

  capitalF = monto*(1+nInteres)^tiempo;
  cuota= monto*tiempo*nInteres;
  vista.innerHTML +='El capital final seria de '  + capitalF + ' y la cuota de '+ cuota ;


}

function saveTask(e) {
  let monto = newFunction();
  let persona = document.getElementById("persona").value;
  let tiempo = document.getElementById('tiempo').value;
  let interes = document.getElementById("interes").value;
  let capitalF= 0;
  let cuota = 0;

  var nInteres = interes /100;

  capitalF = monto*(1+nInteres)^tiempo;
  cuota= monto*tiempo*nInteres;
  console.log(tiempo)

  let task = {
    monto,
    persona,
    tiempo,
    interes,
    capitalF,
    cuota
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formulario').reset();
  e.preventDefault();
}
function newFunction() {
    return document.getElementById('monto').value;
}


function deleteTask(monto) {
    console.log(monto)
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].monto == monto) {
        tasks.splice(i, 1);
      }
    }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let monto = tasks[i].monto;
    let persona = tasks[i].persona;
    let tiempo = tasks[i].tiempo;
    let interes = tasks[i].interes;
    let capitalF = tasks[i].capitalF;
    let cuota = tasks[i].cuota;
    
    tasksView.innerHTML += `<tr>
    <td>${persona}</td>
    <td>${monto}</td>

    <td>${tiempo}</td>
    <td>${interes}</td>
    <td>${capitalF}</td>
    <td>${cuota}</td>
    
    <td><a href="#" onclick="deleteTask('${monto}')" class="btn btn-danger ml-5">Eliminar</a></td>
    </tr>`;
  
    const hoy = new Date() ;
 
  }


}



function vistaPrincipal(){
  location.reload();
}

getTasks();
