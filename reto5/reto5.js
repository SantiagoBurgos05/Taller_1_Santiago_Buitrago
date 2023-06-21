let btnCirculoAr=document.getElementById("abrirCirculoAr");
let btnCirculoPe=document.getElementById("abrirCirculoPe");
let btnTrianguloAr=document.getElementById("abrirTrianguloAr");
let btnTrianguloPe=document.getElementById("abrirTrianguloPe");
let btnRectanguloAr=document.getElementById("abrirRectanguloAr");
let btnRectanguloPe=document.getElementById("abrirRectanguloPe");
let btnCuadradoAr=document.getElementById("abrirCuadradoAr");
let btnCuadradoPe=document.getElementById("abrirCuadradoPe");


let venCirculoAr=document.getElementById("ventanaCirculoAr");
let venCirculoPe=document.getElementById("ventanaCirculoPe");
let venTrianguloAr=document.getElementById("ventanaTrianguloAr");
let venTrianguloPe=document.getElementById("ventanaTrianguloPe");
let venRectanguloAr=document.getElementById("ventanaRectanguloAr");
let venRectanguloPe=document.getElementById("ventanaRectanguloPe");
let venCuadradoAr=document.getElementById("ventanaCuadradoAr");
let venCuadradoPe=document.getElementById("ventanaCuadradoPe");


let cerCirculoAr=document.querySelector(".cerrarCirculoAr");
let cerCirculoPe=document.querySelector(".cerrarCirculoPe");
let cerTrianguloAr=document.querySelector(".cerrarTrianguloAr");
let cerTrianguloPe=document.querySelector(".cerrarTrianguloPe");
let cerRectanguloAr=document.querySelector(".cerrarRectanguloAr");
let cerRectanguloPe=document.querySelector(".cerrarRectanguloPe");
let cerCuadradoAr=document.querySelector(".cerrarCuadradoAr");
let cerCuadradoPe=document.querySelector(".cerrarCuadradoPe");

btnCirculoAr.addEventListener("click",()=>{
    venCirculoAr.style.display="block";
})

btnCirculoPe.addEventListener("click",()=>{
    venCirculoPe.style.display="block";
})

btnTrianguloAr.addEventListener("click",()=>{
    venTrianguloAr.style.display="block";
})

btnTrianguloPe.addEventListener("click",()=>{
    venTrianguloPe.style.display="block";
})

btnRectanguloAr.addEventListener("click",()=>{
    venRectanguloAr.style.display="block";
})

btnRectanguloPe.addEventListener("click",()=>{
    venRectanguloPe.style.display="block";
})

btnCuadradoAr.addEventListener("click",()=>{
    venCuadradoAr.style.display="block";
})

btnCuadradoPe.addEventListener("click",()=>{
    venCuadradoPe.style.display="block";
})

//5.Cerrar la ventana Modal
cerCirculoAr.addEventListener("click",()=>{
    venCirculoAr.style.display="none";
})

cerCirculoPe.addEventListener("click",()=>{
    venCirculoPe.style.display="none";
})

cerTrianguloAr.addEventListener("click",()=>{
    venTrianguloAr.style.display="none";
})

cerTrianguloPe.addEventListener("click",()=>{
    venTrianguloPe.style.display="none";
})

cerRectanguloAr.addEventListener("click",()=>{
    venRectanguloAr.style.display="none";
})

cerRectanguloPe.addEventListener("click",()=>{
    venRectanguloPe.style.display="none";
})

cerCuadradoAr.addEventListener("click",()=>{
    venCuadradoAr.style.display="none";
})
cerCuadradoPe.addEventListener("click",()=>{
    venCuadradoPe.style.display="none";
})

let a=document.getElementById("btncala")
a.addEventListener("click",function Calcular(e){
    e.preventDefault()
    var CirculoAr = parseFloat(document.getElementById("CirculoAr").value);
        let res=parseFloat(3.1416*(CirculoAr*2)) 
        alert("El Area del circulo es " + res)
      
})

let b =document.getElementById("btncalb")
b.addEventListener("click",function Calcular(e){
    e.preventDefault()
    var CirculoPe = parseFloat(document.getElementById("CirculoPe").value);
        let res=parseFloat(2*CirculoPe*3.1416)
        alert("El Perimetro del circulo es " + res)
      
})

let c =document.getElementById("btncalc")
c.addEventListener("click",function Calcular(e){
    e.preventDefault()
    var TrianguloAr1 = parseFloat(document.getElementById("TrianguloAr1").value);
    var TrianguloAr2 = parseFloat(document.getElementById("TrianguloAr2").value);

        let res=parseFloat((TrianguloAr1*TrianguloAr2)/2)
        alert("El Area del triangulo es" + res)
})


let d =document.getElementById("btncald")
d.addEventListener("click",function Calcular(e){
    e.preventDefault()
    var TrianguloPe1 = parseFloat(document.getElementById("TrianguloPe1").value);
    var TrianguloPe2 = parseFloat(document.getElementById("TrianguloPe2").value);
    var TrianguloPe3 = parseFloat(document.getElementById("TrianguloPe3").value);
        let res=parseFloat(TrianguloPe1+TrianguloPe2+TrianguloPe3) 
        alert("El Perimetro del triangulo es" + res)
})

let e =document.getElementById("btncale")
e.addEventListener("click",function Calcular(e){
    e.preventDefault()
    var RectanguloAr1 = parseFloat(document.getElementById("RectanguloAr1").value);
    var RectanguloAr2 = parseFloat(document.getElementById("RectanguloAr2").value);
        let res=parseFloat(RectanguloAr1*RectanguloAr2) 
        alert("El Area del rectangulo es" + res)
})

let f =document.getElementById("btncalf")
f.addEventListener("click",function Calcular(e){
    e.preventDefault()
    var RectanguloPe1 = parseFloat(document.getElementById("RectanguloPe1").value);
    var RectanguloPe2 = parseFloat(document.getElementById("RectanguloPe2").value);
        let res=parseFloat((RectanguloPe1*2)+(RectanguloPe2*2)) 
        alert("El Perimetro del rectangulo es" + res)
})

let g =document.getElementById("btncalg")
g.addEventListener("click",function Calcular(e){
    e.preventDefault()
    var CuadradoAr = parseFloat(document.getElementById("CuadradoAr").value);
        let res=parseFloat((CuadradoAr*CuadradoAr)) 
        alert("El Area del cuadrado es" + res)
})

let h =document.getElementById("btncalh")
h.addEventListener("click",function Calcular(e){
    e.preventDefault()
    var CuadradoPe = parseFloat(document.getElementById("CuadradoPe").value);
        let res=parseFloat(CuadradoPe*4) 
        alert("El Perimetro del cuadrado es" + res)
})