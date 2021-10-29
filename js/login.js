
var userArray = [];

if(JSON.parse(sessionStorage.getItem('passingArray')) != null){
	for(i=0;i<JSON.parse(sessionStorage.getItem('passingArray')).length;i++){
	 	userArray.push(JSON.parse(sessionStorage.getItem('passingArray'))[i]);
	};
};

console.log(userArray);

document.getElementById('enter').onclick = function (){authenticate()};


function authenticate(){

	var un = document.getElementById('un').value;
	var pw = document.getElementById('pw').value;

	if(userArray.length>0){
		for(i=0; i<userArray.length; i++){
			if((un == userArray[i].un) && (pw == userArray[i].pw)){
				
				window.location.href = "inicio.html";
				alert("Inicio de sesion correcto!");
				document.getElementById('un').value = "";
				document.getElementById('pw').value = "";
				break;
			}
			if(i==userArray.length-1 || userArray.length==0){
				console.log('working')
				troubleshoot(un, pw);
			}
		}
	}else{
		alert("Cree una cuenta!");
		document.getElementById('un').value = "";
		document.getElementById('pw').value = "";
	}

};

function troubleshoot(un, pw){
		for(j=0; j<userArray.length; j++){
			if(un == userArray[j].un){
				alert("Contraseña incorrecta!");
				document.getElementById('pw').value = "";
				break;
			};
			if(j==userArray.length-1 || userArray.length==0){
				alert("Sin coincidencia. Cree una cuenta.");
				document.getElementById('un').value = "";
				document.getElementById('pw').value = "";
			};
		};
};