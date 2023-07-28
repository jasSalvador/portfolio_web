//iconos
window.addEventListener("scroll", function() {
    const headerIcons = document.querySelector(".header-icons");
    const navbar = document.querySelector(".navbar");

    headerIcons.classList.toggle("hideIcons", window.scrollY > 0);
    navbar.classList.toggle("viewsNav", window.scrollY > 0);
});


//efecto maquina escribir
const machineWriter = (text = '',time = 150, label = '') => {
    let arrayCaracteres = text.split('')
    label.innerHTML = ''
    let i = 0
    let j = text.length
    let writer = setInterval(function(){
        if (i === arrayCaracteres.length) {
            //retroceder
            label.innerHTML = text.substring(0,j)
            j--
            if (j === 0) {
                label.innerHTML = ''
                i = 0
                j = text.length
            }
        } else {
            label.innerHTML += arrayCaracteres[i]
            i++
        }
    }, time)
}

machineWriter("< FULLSTACK DEVELOPER /> ",250, machine)