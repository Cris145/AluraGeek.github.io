const allInputs = document.querySelectorAll("[data-type]");
const allLabels = document.querySelectorAll("[data-label]");

const validarInputs = arrayInputs => {
    arrayInputs.forEach((input, index) => {
        input.addEventListener("blur", () => {
            if (!(input.validity.valid)) {
                allLabels[index].innerText = mensajeError(input, input.dataset.type)
                allLabels[index].style.color = "#f14e2b"
                input.style.border = "2px solid #f14e2b";
            }else{
                allLabels[index].innerText = input.placeholder
                allLabels[index].style.color = "#A2A2A2"
                input.style.border = "none";
            }
        })
    });
}

const mensajeError = (input, inputType) =>{
    let mensajeDeError
    tiposDeError.forEach( error =>{
        if(input.validity[error]){
            mensajeDeError = mensajesDeError[inputType][error]
        }
    })
    return mensajeDeError
}

const tiposDeError = [
    "valueMissing",
    "patternMismatch",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "El nombre puede tener mas de 50 caracteres"
    },email: {
        valueMissing: "El campo email no puede estar vacío",
        patternMismatch: "El email no es válido"
    }, topic: {
        valueMissing: "El campo asunto no puede estar vacío",
        patternMismatch: "El asunto no puede tener mas de 50 caracteres"
    }, mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
        patternMismatch: "El mensaje no puede tener mas de 300 caracteres"
    }
}

validarInputs(allInputs)