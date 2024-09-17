let i = [];





function loadShopcart(id) {
    document.getElementById(id).classList.toggle('d-none');
}

function addMargherita() {
    document.getElementById('marlist').innerHTML = (`1x Margherita = 9€`)
}

function removeMargherita() {
    document.getElementById('marlist').innerHTML = (``)
}

function addSalami() {
    document.getElementById('sallist').innerHTML = (`1x Salami = 9€`)
}

function removeSalami() {
    document.getElementById('sallist').innerHTML = (``)
}