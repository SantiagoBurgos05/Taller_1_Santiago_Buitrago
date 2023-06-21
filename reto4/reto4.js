function conf(c) { 
    c.preventDefault()

    let name=parseInt(document.getElementById("name").value)
    let lastname=parseInt(document.getElementById("lastname").value)
    let signa=parseInt(document.getElementById("signa").value)

    if (name===1 && lastname===1 && signa===1 ||name===2 && lastname===2 && signa===2 ||name===3 && lastname===3 && signa===3 ||name===4 && lastname===4 && signa===4 ||name===5 && lastname===5 && signa===5 ||name===6 && lastname===4 && signa===6 ||name===7 && lastname===7 && signa===7 ) {
        alert("Las opciones son correctas")
    }else{
      alert("Las opciones no corresponden")
    }
  }
