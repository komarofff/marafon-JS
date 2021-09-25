const value = document.getElementById('card')
value.onmousedown = function (event) {

    value.ondragstart = function () {
        return false;
    }
    value.style.position = 'fixed'
    //value.style.zIndex = 1000
    document.body.append(value)
    moveAt(event.pageX, event.pageY)

    function moveAt(pageX, pageY) {
        value.style.left = pageX - value.offsetWidth / 2 + 'px'
        value.style.top = pageY - value.offsetHeight / 2 + 'px'
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY)
    }

    document.addEventListener('mousemove', onMouseMove)
    value.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove)
        value.onmouseup = null
    }
}