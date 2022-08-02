function getText(){
    let text = document.querySelector("#text").value
    if(text.length == 0) {
        alert("Valor vazio!")
    }
    else {
        alert(text+".com")
    }
}