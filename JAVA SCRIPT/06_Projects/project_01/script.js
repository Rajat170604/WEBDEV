const buttons = document.querySelectorAll(".item")
const body = document.querySelector("body")

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        switch (e.target.id) {
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;
            case "aqua":
                body.style.backgroundColor = e.target.id;
                break;
            case "green":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
        
            default:
                body.style.backgroundColor = "#fff";
                break;
        }
    })
})