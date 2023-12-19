setInterval(function() {
    let date = new Date();
    document.querySelector('.clock').innerHTML = date.toLocaleString()
}, 1000)