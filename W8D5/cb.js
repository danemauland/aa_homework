function setTO(callback) {
    window.setTimeout(callback, 5000)
}

function hammer() {
    alert('HAMMERTIME')
}

function hammerTime(time) {
    window.setTimeout(function() {
        alert(`${time} is hammertime!`)
    }, time)
}