/*
Eres estudiante de Hogwarts, tienes la edad suficiente para entrar a estudiar, tienes padres, 
y un linaje de sangre, aun no sabes tu casa, ni tu animal patronus, también tienes cualidades, 
que son muy importantes para que el sombrero seleccionador te asigne una casa.

Crear un objeto, con Nombre, edad, familia, linaje, casa, animal patronus, cualidades:
Gryffindor ("Valor, fuerza, audacia" Linaje: Mestizo, muggle, Sangre pura )
Hufflepuff("Justicia, Lealtad, Paciencia" Linaje: Mestizo, muggle)
Ravenclaw(“Creatividad, Erudición, Inteligencia" Linaje: Mestizo, muggle, Sangre pura)
Slytherin ("Ambición, Determinación, Astucia" Linaje: "Sangre Pura" 
*/

let estHogwarts = {
  nombre: "",
  edad: "",
  familia: {
    madre: "Diana", 
    padre: "Huber",
  },
  linaje: "",
  eleccionCasa: function (casa){  //Se declara luego el valor para "casa"
    eleccionCasa = casa;
  },
  eleccionAnimalPatronus: function(animal){ //Se declara luego el valor para "animalPatronus"
    eleccionAnimalPatronus = animal;
  },
  cualidades: ""
};


const casas = {
  Gryffindor: {
    cualidades: ["valor", "fuerza", "audacia"],
    linaje: ["mestizo", "muggle", "sangre pura"],
  },
  Hufflepuff: {
    cualidades: ["justicia", "lealtad", "paciencia"],
    linaje: ["mestizo", "muggle"],
  },
  ravenclaw: {
    cualidades: ["creatividad", "erudición", "inteligencia"],
    linaje: ["mestizo", "muggle", "sangre pura"],
  },
  slytherin: {
    cualidades: ["ambición", "determinación", "astucia"],
    linaje: ["sangre pura"],
  },
};

estHogwarts = {
  ...estHogwarts, casas             //Actualizar objeto
}

/*
Es una año difícil en Hogwarts, ya que corren rumores que el innombrable ha vuelto, y él y el famoso 
Harry Potter también ha ingresado contigo

tus clases y tus profesores:
*transformaciones: "Profesor Kevin Slughorn",
*herbologia: "Profesor Maria Umbridge",
*pociones: "Profesor Liliana McGonagall",
*encantamientos: "Profesora Jackie",
*defensaContraLasArtesOscuras: "Profesor Robinson Snape",
*animalesMagicos: "Profesor David Filch",
*historiaDeMagia: "Profesor Ronald Sprout"
*/

let clases = {
  transformaciones: "Profesor Kevin Slughorn",
  herbologia: "Profesor Maria Umbridge",
  pociones: "Profesor Liliana McGonagall",
  encantamientos: "Profesora Jackie",
  defensaContraLasArtesOscuras: "Profesor Robinson Snape",
  animalesMagicos: "Profesor David Filch",
  historiaDeMagia: "Profesor Ronald Sprout",
};

estHogwarts = {
  ...estHogwarts, casas, clases       //Actualizar objeto
}

/*
Inicia un nuevo día, es el día del sombrero seleccionador! hay una gran cena de bienvenida, estas tu 
con todos tus compas, según tu linaje y cualidades, el sombrero seleccionador te asignara una casa.
crear un objeto condicional que sirva para escoger la casa al que pertenece el estudiante, será 
condicional según tus cualidades y linaje.

*Gryffindor ("Valor, fuerza, audacia" Linaje: Mestizo, muggle, Sangre pura)
*Hufflepuff("Justicia, Lealtad, Paciencia" Linaje: Mestizo, muggle)
*Ravenclaw(“Creatividad, Erudición, Inteligencia" Linaje: Mestizo, muggle, Sangre pura)
*Slytherin ("Ambición, Determinación, Astucia" Linaje: "Sangre Pura")
*/

if (
  estHogwarts.cualidades.includes("valor") ||
    estHogwarts.cualidades.includes("fuerza") ||
    estHogwarts.cualidades.includes("audacia")
) {
    estHogwarts.eleccionCasa = "Gryffindor";
    estHogwarts.fotoCasa="img/gryffindor.webp"
} 
  else if (
    estHogwarts.cualidades.includes("justicia") ||
    estHogwarts.cualidades.includes("lealtad") ||
    estHogwarts.cualidades.includes("paciencia")) 
  {
    estHogwarts.eleccionCasa = "Hufflepuff";
    estHogwarts.fotoCasa="img/hufflepuff.jpg"
}
  else if (
    estHogwarts.cualidades.includes("creatividad") ||
    estHogwarts.cualidades.includes("erudicion") ||
    estHogwarts.cualidades.includes("inteligencia")) 
  {
  estHogwarts.eleccionCasa = "Ravenclaw";
  estHogwarts.fotoCasa="img/ravenclaw.jpg";
} 
  else if 
  (estHogwarts.cualidades.includes("ambicion") ||
    estHogwarts.cualidades.includes("determinacion") ||
    estHogwarts.cualidades.includes("astucia")) 
  {
  estHogwarts.eleccionCasa = "Slytherin";
  estHogwarts.fotoCasa="img/slytherin.webp";
}



/*
primer día de clases: vas temprano a clase de transformaciones, en clase de transformaciones que es un 
objeto, con transformaciones con boggarts, «Altera la habilidad de un boggart para cambiar de forma y 
provoca risa para derrotarlo.» esto se logra con el encantamiento "Riddikulus".

- Paso 1: Definir la clase de Transformaciones: En este paso, estás creando un objeto llamado claseTransformaciones 
que representa la clase de Transformaciones. Estableces el nombre del profesor, el horario y una propiedad 
para rastrear la transformación de los boggarts. 
- Paso 2: Crear una función para realizar la transformación con "Riddikulus": Aquí defines una función 
realizarTransformacionRiddikulus dentro de claseTransformaciones. Esta función verifica si hay un boggart 
presente y, si es así, realiza la transformación con el encantamiento "Riddikulus".
- Paso 3: Crear una función para enfrentar un boggart: Aquí defines otra función enfrentarBoggart dentro de 
claseTransformaciones. Esta función toma un boggart como argumento, muestra un mensaje con la forma original 
del boggart, realiza la transformación y muestra el resultado.
- Paso 4: Uso y llamada a las funciones: En este paso, creas un objeto boggartEjemplo y luego llamas a la 
función enfrentarBoggart de claseTransformaciones para enfrentar el boggart.
*/

let claseTransformaciones = {
  nombreProfesor : "Kevin Slughorn",
  horario: "10 A.M",
  realizarTransformacionRiddikulus: function(){
    boggartPresente = prompt("Tienes un boggart presente?: ").toLocaleLowerCase,
    infoBoggart = []

    if (boggartPresente == "si"){
      let miedo = prompt("Escribe su mayor miedo: ")
      let risa = prompt("Escribe que le provoca risa: ")
      console.log("¡Se ha realizado el encantamiento!")
      infoBoggart.push(miedo),
      infoBoggart.push(risa)
    }
    else{
      console.log("No tienes un boggart presente")
    }
    return infoBoggart
  },
  enfrentarBoggard: function(infoBoggart){
    console.log(`la forma original es: ${infoBoggart[0]}`)
    console.log(`La transformacion es de ${infoBoggart[1]}`)
    console.log(`${infoBoggart[0]} ${infoBoggart[1]}`)
  }
}

estHogwarts = {
  ...estHogwarts, casas, clases, claseTransformaciones    //Actualizar objeto
}

/**
Puedes ir agregando las demás clases, pero es importante que vayas a la clase de defensa contra las artes 
oscuras, para que puedas defenderte de los dementores que han escapado de Azkaban. crear un objeto con nombre 
defensaContraLasArtesOscuras con la función de generar un animal de patronus, lo genere random y llenar la 
variable, de la propiedad animalPatronus. 
 */
function defensaContraLasArtesOscuras(){
  let animales = ["Nutria", "Liebre", "Zorro", "Venado", "Gato", "Oso", "Lobo", "Ciervo", "Buho", "Perro", "Ganso", "Raton"];
  let eleccionAnimal= Math.floor(Math.random()* animales.length);
  estHogwarts.eleccionAnimalPatronus = animales[eleccionAnimal]
  console.log(`Se ha elegido el animal: ${estHogwarts.eleccionAnimalPatronus}`)
}
defensaContraLasArtesOscuras()


/*
Mostrar información del estudiante con los cambios realizador a su objeto
*/
console.log(`Tu nombre es: ${estHogwarts.nombre}.`);
console.log(`Tienes ${estHogwarts.edad} años de edad.`);
console.log(`Tu familia está conformada por ${estHogwarts.familia.madre} y por ${estHogwarts.familia.padre}.`);
console.log(`Te caracterizas por tener un linaje ${estHogwarts.linaje}.`);
console.log(`Tus cualidades son: ${estHogwarts.cualidades}.`);
console.log(`Perteneces a la casa: ${estHogwarts.eleccionCasa}.`);
console.log(`Y tu animal Patronus es: ${estHogwarts.eleccionAnimalPatronus}.`);
console.log(estHogwarts)
