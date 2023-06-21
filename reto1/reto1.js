function know(k) {
    k.preventDefault()

    let word=(document.getElementById("word").value)
    let options=(document.getElementById("options").value)
    

    switch (options) {
        case "long":
            alert(`La longitud de la palabra es: ${word.length}`)
            break;
        case "may":
            alert(`La palabra en mayúscula es: ${word.toUpperCase()}`)
            break;
        case "min":
            alert(`La palabra en minúscula es: ${word.toLowerCase()}`)
            break;
        case "firstC":
            alert(`El primer caracter de la palabra es: ${word.charAt(0)}`)
            break;
        default:
            break;
    }
    
}