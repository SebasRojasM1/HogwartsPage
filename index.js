document.addEventListener("DOMContentLoaded", () => { //Carga el DOM
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombreEst = document.querySelector("#nombre").value;
    const edadEst = document.querySelector("#edad").value;
    const linajeEst = document.querySelector("#linaje").value;
    const cualidadesEst = document.querySelector("#cualidades").value;

    //CASAS
    if ( cualidadesEst == "valor" || cualidadesEst == "fuerza" || cualidadesEst == "audacia") {
        casa="Gryffindor"
        fotoCasa="img/casas/Gryffindor.webp"
        fondo = "#ce6d1ea9"
    } 
    else if (cualidadesEst == "justicia" || cualidadesEst == "lealtad" || cualidadesEst == "paciencia"){
        casa = "Hufflepuff"
        fotoCasa="img/casas/hufflepuff.webp"
        fondo = "#b1ae02a8"
    }
    else if (
        cualidadesEst == "creatividad" || cualidadesEst == "erudicion" || cualidadesEst == "inteligencia") {
        casa = "Ravenclaw"
        fotoCasa="img/casas/Ravenclaw.webp";
        fondo = "#1e88ce9f"
    } 
    else if (cualidadesEst == "ambicion" || cualidadesEst == "determinacion" || cualidadesEst == "astucia"){
        casa = "Slytherin"
        fotoCasa="img/casas/Slytherin.png";
        fondo = "#006d09a8"
    }


    //LINAJE
    if(linajeEst == "muggle"){
        fotoPersona = "img/muggle.jpg"
    }else if(linajeEst == "sangre pura"){
        fotoPersona = "img/sangre-pura.jpg"
    }else if(linajeEst == "mestizo"){
        fotoPersona = "img/mestizo.jpg"
    }


    //ANIMALES PATRONUS
    if(estHogwarts.eleccionAnimalPatronus == "Nutria"){
        imgAnimal = "img/animalIMG/nutria.png"
    }else if(estHogwarts.eleccionAnimalPatronus == "Liebre"){
        imgAnimal = "img/animalIMG/liebre.jpg"
    }else if(estHogwarts.eleccionAnimalPatronus == "Zorro"){
        imgAnimal = "img/animalIMG/zorro.JPG"
    }else if(estHogwarts.eleccionAnimalPatronus == "Venado"){
        imgAnimal = "img/animalIMG/Venado.jpg"
    }else if(estHogwarts.eleccionAnimalPatronus == "Gato"){
        imgAnimal = "img/animalIMG/gato.jpg"
    }else if(estHogwarts.eleccionAnimalPatronus == "Oso"){
        imgAnimal = "img/animalIMG/oso.png"
    }else if(estHogwarts.eleccionAnimalPatronus == "Lobo"){
        imgAnimal = "img/animalIMG/Lobo.png"
    }else if(estHogwarts.eleccionAnimalPatronus == "Ciervo"){
        imgAnimal = "img/animalIMG/ciervo.jpeg"
    }else if(estHogwarts.eleccionAnimalPatronus == "Buho"){
        imgAnimal = "img/animalIMG/buho.jpg"
    }else if(estHogwarts.eleccionAnimalPatronus == "Perro"){
        imgAnimal = "img/animalIMG/perro.jpeg"
    }else if(estHogwarts.eleccionAnimalPatronus == "Ganso"){
        imgAnimal = "img/animalIMG/ganso.jpg"
    }else if(estHogwarts.eleccionAnimalPatronus == "Raton"){
        imgAnimal = "img/animalIMG/raton.png"
    }




    estHogwarts.nombre = nombreEst;
    estHogwarts.edad = edadEst;
    estHogwarts.linaje = linajeEst;
    estHogwarts.cualidades = cualidadesEst;

    console.log(estHogwarts)
    infoEstudiantes(estHogwarts) 
    elegirCasaSorteo(estHogwarts)
    animalPatronus(estHogwarts)
    clase(estHogwarts)
})


function limpiar(){
    let z = document.querySelectorAll("p")
    for (let v = 0; v < z.length; v++){
        z[v].remove()
    }
}


function infoEstudiantes(info){
    const tarjetas = document.querySelector(".infoContainer")
    limpiar()
    const student = [info]

    student.forEach((estudiante) => {
        const estudianteHTML = document.createElement("p");
        const {nombre, edad, linaje} = estudiante
        

        estudianteHTML.innerHTML = `
        <section class="info">
            <div class="img-somos1" id="img-person"><img src="${fotoPersona}"></div>
            <div class="info-somos1">
                <h3>ESTUDIANTE</h3>
                <p>El estudiante <span>${nombre}</span> tiene <span>${edad}</span> años de edad.</br> 
                    Su linaje representativo es: <span>${linaje}</span></p>
            </div>
        </section>

        <section class="casaElegir">
            <div><h2>Sortear casa a representar:</h2> </br>
            <img src="img/sombrero.png" id="elegirCasaEstudiante"">
            </div>
        </section>

        <section id="animalPatronusCont" class="animalPatronusCont">
            <h2>Mostrar que animal patronus representas: </h2>
            <img src="img/gifPatronus.gif" id="animalBoton">

        </section>

        <section id="clase" class="clase">
            <h2>Clase de pociones: </h2>
            <p id="claseBoton" href="#">ir a la clase de pociones</p>

        </section>
        `
        tarjetas.appendChild(estudianteHTML)
    })
}


function elegirCasaSorteo(estudiante){
    const sorteo = document.querySelector(".casaElegir")
    const botonImagen = document.querySelector("#elegirCasaEstudiante")
    
    botonImagen.addEventListener('click', () => {
        const sorteoSombrero = document.createElement("div")
        sorteoSombrero.classList.add("sorteoEst")
        const {nombre} = estudiante; // Destructuración para obtener el elemento objetivo del evento (en este caso, la imagen)

        sorteoSombrero.innerHTML = `
            <h3>CASA ELEGIDA</h3>
            <img src="${fotoCasa}" alt="">
            <p>El estudiante <span>${nombre}</span> ha sido elegido para representar la casa: <span>${casa}</span>, ¡Felicidades!</p>
        `;
        sorteo.appendChild(sorteoSombrero)
    });
}

function animalPatronus(estudiante){
    const sorteoAnimal = document.querySelector("#animalPatronusCont")
    const botonAnimal = document.querySelector("#animalBoton")
    
    botonAnimal.addEventListener('click', () => {
        const elegirAnimal = document.createElement("p")
        const {nombre, eleccionAnimalPatronus} = estudiante; // Destructuración para obtener el elemento objetivo del evento (en este caso, la imagen)

        elegirAnimal.innerHTML = `
            <h4>ANIMAL PATRONUS</h3>
            <img src="${imgAnimal}" alt="">
            <p>El estudiante <span>${nombre}</span> se le ha asignado el <span>${eleccionAnimalPatronus}</span> como animal patronus, ¡Felicidades!</p>
            `;
        sorteoAnimal.appendChild(elegirAnimal)
    });
}


function clase(){
    const clase = document.querySelector("#clase")
    const botonClase = document.querySelector("#claseBoton")
    
    botonClase.addEventListener('click', () => {
        const irAClase = document.createElement("div")
        irAClase.classList.add("containerClase")

        irAClase.innerHTML = `
            <p>Has ido a clase de pociones, con el profesor Kevin Slughorn.</p>
            <img src="img/potion.gif" alt="">
            <img src="img/ProfesorKevin.webp" alt="">
            `;
            clase.appendChild(irAClase)
    });
}


});


