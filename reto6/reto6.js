let btnModal = document.getElementById("abrirModal");
let venModal = document.getElementById("ventanaModal");
let cerModal = document.querySelector(".cerrarModal");

btnModal.addEventListener("click", () => {
  venModal.style.display = "block";
});

cerModal.addEventListener("click", () => {
  venModal.style.display = "none";
});
// regla de validacion

const number=/^[0-9]{5,15}$/ 
const text=/[a-z Ñ ñ á-ú Á-Ú A-Z 0-9]{3,50}/
const email=/\w(@misena.edu.co)/
const pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{4,}$/


let edad
let flag

// Acceder a los elementos que se van a alterar
const form=document.getElementById("validacion")
console.log(form)

// Acceder al valor digitado en el campo
const Nodoc=form.Nodoc.value
const Nom=form.Nom.value
const Apl=form.Apl.value
const FeNa=form.FeNa.value
const ema=form.ema.value
const Pass=form.Pass.value
const confirmm=form.confirmm.value
const acept=form.acept.value

const f1=document.querySelector("#campoNoDoc .feedback")
const f2=document.querySelector("#campoName .feedback")
const f3=document.querySelector("#campoLast .feedback")
const f4=document.querySelector("#date .feedback")
const f5=document.querySelector("#email .feedback")
const f6=document.querySelector("#pass .feedback")
const f7=document.querySelector("#conPass .feedback")

// numero documento
form.Nodoc.addEventListener('input', (e)=>{
    e.preventDefault()
    console.log("Se esta escribiendo sobre el input")

    if (number.test(e.target.value)) {
        //Regla pasa la validacion
        form.Nodoc.setAttribute("class","succes")
        f1.style.setProperty("visibility","hidden")
        f1.style.setProperty("opacity","0")

    }else{
        //Regla no pasa la validacion
        form.Nodoc.setAttribute("class","error")
        f1.textContent="Ingrese solo caracteres númericos(mínimo 5)"
        f1.style.setProperty("visibility","visible")
        f1.style.setProperty("opacity","1")

    }
})

// Nombre
form.Nom.addEventListener('input', (e)=>{
    e.preventDefault()

    if (text.test(e.target.value)) {
        //Regla pasa la validacion
        form.Nom.setAttribute("class","succes")
        f2.style.setProperty("visibility","hidden")
        f2.style.setProperty("opacity","0")


    }else{
        form.Nom.setAttribute("class","error")
        f2.textContent="Ingrese los caracteres alfanúmericos que desee (mínimo 3)"
        f2.style.setProperty("visibility","visible")
        f2.style.setProperty("opacity","1")

    }
})

// Apellido 
form.Apl.addEventListener('input', (e)=>{
    e.preventDefault()

    if (text.test(e.target.value)) {
        //Regla pasa la validacion
        form.Apl.setAttribute("class","succes")
        f3.style.setProperty("visibility","hidden")
        f3.style.setProperty("opacity","0")

    }else{
        form.Apl.setAttribute("class","error")
        f3.textContent="Ingrese los caracteres alfanúmericos que desee (mínimo 3)"
        f3.style.setProperty("visibility","visible")
        f3.style.setProperty("opacity","1")

    }
})

// Fecha
form.FeNa.addEventListener('input', e => {
    e.preventDefault();
  
    const fechaIngresada = new Date(e.target.value);
    const hoy = new Date();
    edad = hoy.getFullYear() - fechaIngresada.getFullYear();
  
    if (edad < 18) {
      f4.textContent = "Debes ser mayor de 18 años para registrarte"
      f4.style.setProperty("visibility", "visible")
      f4.style.setProperty("opacity", "1")
    } else {
      form.FeNa.setAttribute("class", "success")
      f4.style.setProperty("visibility", "hidden")
      f4.style.setProperty("opacity", "0")
    }
  })
  

// Correo
form.ema.addEventListener('input', (e)=>{
    e.preventDefault()

    if (email.test(e.target.value)) {
        //Regla pasa la validacion
        form.ema.setAttribute("class","succes")
        f5.style.setProperty("visibility","hidden")
        f5.style.setProperty("opacity","0")

    }else{
        form.ema.setAttribute("class","error")
        f5.textContent="Ingrese un correo de dominio @misena.edu.co"
        f5.style.setProperty("visibility","visible")
        f5.style.setProperty("opacity","1")

    }
})


// contraseña 
form.Pass.addEventListener('input', (e)=>{
    e.preventDefault()

    if (pass.test(e.target.value)) {
        //Regla pasa la validacion
        form.Pass.setAttribute("class","succes")
        f6.style.setProperty("visibility","hidden")
        f6.style.setProperty("opacity","0")

    }else{
        form.Pass.setAttribute("class","error")
        f6.textContent="Ingrese mínimo una letra mayúscula, un número, una letra minúscula y un caracter especial(mínimo 10 caracteres)"
        f6.style.setProperty("visibility","visible")
        f6.style.setProperty("opacity","1")
    }
})

///confirmar contraseña
form.confirmm.addEventListener('input', (e)=>{
    e.preventDefault()

    if (form.confirmm.value === form.Pass.value) {
        //Regla pasa la validacion
        form.confirmm.setAttribute("class","succes")
        f7.style.setProperty("visibility","hidden")
        f7.style.setProperty("opacity","0")
    }else{
        form.confirmm.setAttribute("class","error")
        f7.textContent="Las contraseñas deben ser iguales"
        f7.style.setProperty("visibility","visible")
        f7.style.setProperty("opacity","1")
    }
})

    // alerta de validacion con focus en el campo vacio
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        flag= true
        // numero documento
        if (form.Nodoc.value==null ||form.Nodoc.value==0 || !number.test(form.Nodoc.value)) {
            alert("Debe ingresar un número de documento valido")
            form.Nodoc.focus()
            form.Nodoc.setAttribute("class","error")
            flag=false
            }
            //Nombre
        if (form.Nom.value==null ||form.Nom.value==0 || !text.test(form.Nom.value)) {
            alert("Debe ingresar un nombre valido")
            form.Nom.focus()
            form.Nom.setAttribute("class","error")
            flag=false
        }
        //Apellido
        if (form.Apl.value==null ||form.Apl.value==0 || !text.test(form.Apl.value)) {
            alert("Debe ingresar un apellido valido")
            form.Apl.focus()
            form.Apl.setAttribute("class","error")
            flag=false
        }
        //Fecha
        if (form.FeNa.value == null || form.FeNa.value == 0 || edad < 18) {
            alert("Debe ingresar una fecha de nacimiento válida (debes ser mayor de edad)");
            form.FeNa.focus();
            form.FeNa.setAttribute("class", "error");
            flag=false
          }
        // email
          if (form.ema.value==null ||form.ema.value==0 ||!email.test(form.ema.value)) {
            alert("Debe ingresar un email valido")
            form.ema.focus()
            form.ema.setAttribute("class","error")
            flag=false
        }
        //contraseña
        if (form.Pass.value==null ||form.Pass.value==0 || !pass.test(form.Pass.value)) {
            alert("Debe ingresar una contraseña valida")
            form.Pass.focus()
            form.Pass.setAttribute("class","error")
            flag=falsae
        }
        //confirmacion de contraseña
        if (form.confirmm.value==null ||form.confirmm.value==0 ||!pass.test(form.confirmm.value)||form.confirmm.value != form.Pass.value) {
            alert("Debe ingresar la misma contraseña para la confirmación")
            form.confirmm.focus()
            form.confirmm.setAttribute("class","error")
            flag=false
        }
    //checkbox
    if (!document.getElementById('acept').checked) {
        alert("Debe aceptar los términos y condiciones");
        flag = false;
      }
      if (flag) {
        form.submit()
      }
    })