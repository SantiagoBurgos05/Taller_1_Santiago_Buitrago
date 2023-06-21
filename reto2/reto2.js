function convert(e){
    e.preventDefault() 
    
    let temp=parseFloat(document.getElementById("temp").value)
    let convertD=(document.getElementById("convertD").value)
    let convertA=(document.getElementById("convertA").value)
    let result=con(temp, convertD, convertA)

    function con(temp, convertD, convertA) {
        let result=0

        switch (convertD) {
            case "celcius":
                switch (convertA) {
                    case "fahrenheit":
                        result = (temp * 9/5) + 32;
                        alert(`El resultado es: ${result}`)
                        break;
                    case "kelvin":
                        result = temperatura + 273.15;
                        alert(`El resultado es: ${result}`)
                        break;
                    default:
                        break;
                }
            case "fahrenheit":
                switch (convertA) {
                    case "celcius":
                        result = (temp - 32) * 5/9;
                        alert(`El resultado es: ${result}`)
                        break;
                    case "kelvin":
                        result = (temp + 459.67) * 5/9;
                        alert(`El resultado es: ${result}`)
                        break;
                    default:
                        break;
                }
            case "kelvin":
                switch (convertA) {
                    case "celcius":
                        result = temp - 273.15;
                        alert(`El resultado es: ${result}`)
                        break;
                    case "fahrenheit":
                        result = (temp * 9/5) - 459.67;
                        alert(`El resultado es: ${result}`)
                        break;
                    default:
                        break;
                }
            default:
                break;
        }
      }
    }
