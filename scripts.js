

//agregar fila
function agregarFila(){

	var table = document.getElementById("table"),
	newRow = table.insertRow(table.length),
	cell1 = newRow.insertCell(0),
	cell2 = newRow.insertCell(1),
	cell3 = newRow.insertCell(2),
	cell4 = newRow.insertCell(3),
	cell5 = newRow.insertCell(4),
	cell6 = newRow.insertCell(5),
	cell7 = newRow.insertCell(6),
	cell8 = newRow.insertCell(7);

	fname = document.getElementById("fname").value;
	ape = document.getElementById("ape").value;
	doc = document.getElementById("doc").value;
	edad = document.getElementById("edad").value;
	mail = document.getElementById("mail").value;
	tel = document.getElementById("tel").value;
	x = document.getElementsByClassName("radioButton");


	if(fname == "" || ape == "" || doc == "" || edad == "" || mail == "" || tel == ""){
		alert("Compruebe que no existan campos vacios.");
		return false;
	}else if(doc.length!=9 && doc.length!=8){
		alert("El campo DNI debe contener entre 8 y 9 caracteres.");
		document.getElementById("doc").value = "";
		document.getElementById("doc").focus();
		return false;
	}else if(tel.length!=7 && tel.length!=8 && tel.length!=9 && tel.length!=10){
		alert("El Numero de Telefono debe contener entre 7 y 10 caracteres.");
		document.getElementById("tel").value = "";
		document.getElementById("tel").focus();
		return false;
	}else if(edad<=17){
		alert("Lo sentimos! Debes ser mayor de 18 años");
		document.getElementById("edad").value = "";
		document.getElementById("edad").focus();
		return false;
	}


	cell1.innerHTML = fname;
	cell2.innerHTML = ape;
	cell3.innerHTML = doc;
	cell4.innerHTML = edad;
	cell5.innerHTML = mail;
	cell6.innerHTML = tel;
	for(var i=0;i<x.length;i++){
		if(x[i].checked){
			cell7.innerHTML = x[i].value
		}
	}
	cell8.innerHTML = '<button type="button" class="btn btn-danger" onclick="eliminarFila()" >Eliminar fila</button>';

}

function borrar(r) {
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("table").deleteRow(i);
}
function eliminarFila(){
	var table = document.getElementById("table");
	var rowCount = table.rows.length;
				  //console.log(rowCount);
				  
				  if(rowCount <= 1)
				  	alert('No se puede eliminar el encabezado');
				  else
				  	table.deleteRow(rowCount -1);
				}



				/*declaracion y asignacion de expresion de funcion, se llama en la linea 142*/
				var tableToExcel = (function() {

					var uri = 'data:application/vnd.ms-excel;base64,',
					template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
			  
			  
					/*expresion de funcion encriptacion base 64, llamada en linea 91 recibe el formato*/
					base64 = function(s) {
					  return window.btoa(unescape(encodeURIComponent(s)))
					},
			  
					/*expresion de funcion para formato reemplazando (replace) con una expresion regular, llamada linea 91 por base64*/
					format = function(s, c) {
					  return s.replace(/{(\w+)}/g, function(m, p) {
						return c[p];
					  })
					}
			  
					/*return o retorno de la funcion anonima superior recibe id del elemento <table> y titulo de Excel*/
					return function(table, name) {
			  
					  /*declaro y asigno la cantidad de filas en la tabla*/
					  var size = document.getElementById(table).rows.length;
			  
					  /*si el tamaño (size) es mayor a 1, es decir hay al menos 1 registro genera el excel*/
					  if(size > 1){
						if (!table.nodeType) table = document.getElementById(table)
						  var ctx = {
							worksheet: name || 'Worksheet',
							table: table.innerHTML
						  }
						  window.location.href = uri + base64(format(template, ctx))
						  /*si no es el tamaño (size) no es mayor a 1, muestra un alerta*/
						}else{
			  
						  document.getElementById("alerta").innerHTML ='<div class="alert alert-danger alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Atencion ! </strong>Por favor , al menos debes ingresar un registro.</div>' 
			  
						}//fin else y condiciones
			  
					  }//fin "return" o "retorno" de la funcion anonima
			  
					}//fin funcion anonima
					)()

		