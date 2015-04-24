// Tweets

function Tweets(titulo, desc){ // creada clase // OJO DEFINIR CLASES EN SINGULAR
	this.titulo = titulo;
	this.desc = desc;
}

Tweets.imprimir = function(){ // define metodo de clase Nombreclase.metodo y funcion
	console.log('Hola!');
}

// Tweets.imprimir(); > Hola!

var twit = new Tweets('Titulo', 'Lorem...'); 

// console.log(twit);

// Tweets.imprimir(); // metodo de clase.

/* twit.imprimir(); no arroja resultado porque no está definido 
el metodo imprmir. Los metodos de clase no son accesibles 
por las instancias */


Tweets.twits = []; // creado arreglo vacio. // ATRIBUTO DE CLASE

// aceptar va a agregar un nuevo tweet // ESTO ES UN METODO DE CLASE
Tweets.aceptar = function(e){
	e.preventDefault(); // previene el submit // debe tener el nombre del parametro, en este caso, e.
	var titulo = document.getElementById('titulo').value; // obtener segun ID HTML
	var desc = document.getElementById('desc').value; // obtener
	var twit = new Tweets(titulo, desc);
	// console.log(twit); ver si imprime
	Tweets.twits.push(twit); /* el arreglo que existe agregale un elemento mas
	, al que se creo en linea 25 */
	// console.log(Tweets.twits);
	Tweets.cancelar(e);
	Tweets.mostrar();
	Tweets.guardar();
}

// limpia los datos del formulario 
Tweets.cancelar = function(e){ // hace referencia a la clase que se puso en el onclick en HTML
	var titulo = document.getElementById('titulo'); // obtener
	var desc = document.getElementById('desc'); // obtener
	titulo.value = '';
	desc.value = '';
	event.preventDefault();  /* se le dice al comportamiento por defecto que no se 
	ejecute, por ejemplo para botones dentro de un formulario, si clickeas va a 
	intentar enviar. Con preventDefault no hace nada. se debe pasar en el HTML en () del evento onclick*/

}

// muestra tweets
Tweets.mostrar = function(){
	var comentarios = ''; // se van concatenando strings, por eso es vacio // LA VARIABLE DEBE DECLARARSE ANTES QUE LA FUNCION
	Tweets.twits.map(function(elemento, indice){ // .map itera elementos, 
		

		
		comentarios += '<article">';
		comentarios += '<h4 class="titulo-tweet">' + elemento.titulo + '</h4>';
		comentarios += '<p>' + elemento.desc + '</p>';
		comentarios += '</article>';

	});

	document.getElementById('comentarios').innerHTML = comentarios;
}

// para guardar, que no se pierdan los tweets al actualizar
Tweets.guardar = function(){
	var twits = Tweets.twits; 
	var twitsEncode = JSON.stringify(twits); // se transforma en un string
	localStorage.setItem('twits', twitsEncode); // quedan guardados los tweets enviados
}

Tweets.obtenerTweets = function(){
	var twitsEncoded = localStorage.getItem('twits');
	var twits = JSON.parse(twitsEncoded);
	Tweets.twits = twits;
}


Tweets.obtenerTweets();
Tweets.mostrar();
