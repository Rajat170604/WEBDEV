function randomColor() {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalid
function startChangingColor() {
    function chnageBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
    if (!intervalid) {
        intervalid = setInterval(chnageBgColor, 1000)
    }
}



function stopChangingColor() {
    clearInterval(intervalid)
    intervalid = null
    document.body.style.backgroundColor = "#fff"
}
document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)