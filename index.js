var assert = require("assert");

//Ejercicio 1
/*function Sumatoria (numinicial,numfinal)
{
  var valores = {
  inicio : numinicial,
  final: numfinal
respuesta : function ()
   {

return (valores.final*(valores.final +1)/2);
   }
}
}
var opera = new Sumatoria(1,10);*/
//Ejercicio 4

function Ejercicio4(nombre,apellido,edad,genero,ciudad,pais)
{
	this.nombre=nombre;
	this.apellido=apellido;
	this.edad=edad;
	this.genero=genero;
	this.ciudad=ciudad;
	this.pais=pais;
	this.ficha=function(){
		var respuesta="";
		respuesta+="Nombre: "+ this.nombre + " " + this.apellido +"\n"+"Edad: "+this.edad+"\n"+"País: "+this.pais;
		return respuesta ;
	};
}

//Ejercicio 2
function ChicasLaboratoria(nombre,edad, ocupacion, genero){
  this.nombre = nombre,
  this.edad = edad,
  this.ocupacion = ocupacion,
  this.genero = genero,
  this.superCoder = function(){
    if((this.genero == "femenino") && (this.edad >=  17) && (this.ocupacion == "estudiante" || this.ocupacion == "web developer"))
      {
        return (this.nombre + " you are awesome");
        }
        else
        {
          return ("upsiii");
        }
    }

  }

  var chicas = new ChicasLaboratoria("carla",18,"estudiante","femenino");




//definiendo la prueba unitaria
/*describe ("Ejercicio objeto II", function(){
  describe("Ejercicio 1", function(){
    it("Prueba sumados, 1,10",function(){
    assert.equal(55,opera.sumita()) ;
    });
  });*/



  describe("Ejercicio 4",function(){
		it("Retornar el nombre, edad y país del paciente",function(){
			var persona = new Ejercicio4("Blanca","Pérez",19,"Femenino","Santiago","Chile");
			assert.equal("Nombre: Blanca Pérez\nEdad: 19\nPaís: Chile",persona.ficha());
		});
	});
//});

describe("Ejercicio 2", function(){
    it("Si es una Súper Coder debe retornar el mensaje you're awesome, en caso contrario el mensaje debe ser upsiii", function(){
        assert.equal("carla you are awesome",chicas.superCoder());
    });
  });
