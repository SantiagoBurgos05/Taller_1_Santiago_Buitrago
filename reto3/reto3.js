function determine(a) {
    a.preventDefault()

let first=parseFloat(document.getElementById("first").value)
let second=parseFloat(document.getElementById("second").value)
let third=parseFloat(document.getElementById("third").value)
let typeT

if (first === second && second === third) {
    typeT = "equilátero";
    alert(`El triangulo es: ${typeT}`)
  } else if (first === second || first === third || second === third) {
    typeT = "isósceles";
    alert(`El triangulo es: ${typeT}`)
  } else {
    typeT = "escaleno";
    alert(`El triangulo es: ${typeT}`)
  }
}
