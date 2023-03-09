const on = document.getElementById ("on")
const off = document.getElementById("off")
const lamp = document.getElementById("lamp")

function lampOn () {
    lamp.src = 'assets/ligada.jpg'
            
}

function lampBroken () {
    lamp.src = 'assets/quebrada.jpg'
}

function lampOff () {
    lamp.src = 'assets/desligada.jpg'
}


on.addEventListener("click", lampOn)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
off.addEventListener("click", lampOff)
lamp.addEventListener("dblclick", lampBroken)


