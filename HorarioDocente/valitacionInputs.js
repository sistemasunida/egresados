let contFirstName = 0;
let contLastName = 0;
let contAsignatura = 0;

//escucha el evento en el input Nombre
const inputFirstName = (e) => {
    contFirstName++;
    //solo debe ingresar una vez 
    if(e.target.value != ''  && contFirstName == 1 ) {
        document.getElementById('firstName').name = '1';//cambiamos el valor al name
        habilitarInpust();
    }
    //en caso de vaciar el input cambiamos nuevamente el name
    if(e.target.value == ''){
        document.getElementById('firstName').name = '0';
        document.getElementById('firstName').required = true;

        contFirstName = 0;
        //insertarInputs
    }
}

const inputLastName = (e) => {
    contLastName++;
    if(e.target.value != '' && contLastName == 1) {
        document.getElementById('lastName').name = '1';//cambiamos el valor al name
        habilitarInpust();
    }
    if(e.target.value == '') {
        contLastName = 0;
        document.getElementById('lastName').name = '0';
        document.getElementById('lastName').required = true;

    }
}

const inputAsignatura = (e) => {
    contAsignatura++;
    if(e.target.value != '' && contAsignatura == 1) {
        document.getElementById('asignatura').name = '1';
        habilitarInpust();
    }
    if(e.target.value == '') {
        contAsignatura = 0;
        document.getElementById('asignatura').name = '0';
        document.getElementById('asignatura').required = true;

    }
}

//funcion que quita los require de los inputs
const habilitarInpust = () => {
    let inputStatus = document.getElementsByClassName('input-status');
    for(let i = 0; i < inputStatus.length; i++) {
        if(inputStatus[i].name != '1') {
            inputStatus[i].required = false;
        }
    }
}

const horarioButton = (e) => {
    fetch(' https://pokeapi.co/api/v2/pokemon/ditto')
    .then((result) => {
        return result.json();
    })
    .then((cuerpo) => {
        console.log(cuerpo.abilities);
    })
    .catch((err) => {
        console.log(err);
    })
    e.preventDefault();
}

//escucha el evento en el input Nombre
document.getElementById('firstName').addEventListener('keyup', inputFirstName);
document.getElementById('lastName').addEventListener('keyup', inputLastName);
document.getElementById('asignatura').addEventListener('keyup', inputAsignatura);
//caputa el envento de envio de formulario
document.getElementById('horarioButton').addEventListener('submit', horarioButton)