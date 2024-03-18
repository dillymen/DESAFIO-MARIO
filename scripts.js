
const form = document.querySelector (".Formulário-fale-conosco")
const mascara = document.querySelector (".Mascara-formulario")


function CliqueinoBotão() {
   form.style. left = "50%"
   form.style. transform ="translateX(-50%)"
   mascara.style. visibility ="visible"
   
}

function CliqueinaMascara() {
    form.style. left ="-300px"
    mascara.style. visibility ="hidden"
    form.style. transform ="translateX(0)"
        
}

function FaleConosco() {
    form.style. left ="50%"
    form.style. transform = "translateX(-50%)"
    mascara.style. visibility = "visible"
}