let button = document.querySelector(".button")
let buttonTwo = document.querySelector(".buttonTwo")
let bigBox = document.querySelector(".bigBox")
let bigBoxTwo = document.querySelector(".bigBoxTwo")
let number = 0;
let numTwo = 0;


function all() {
    function num() {
        numTwo++;
        console.log(numTwo);
        for (number; number < numTwo; number++) {
            bigBox.innerHTML += `<p>Клик ${numTwo}</p>`
        }


    }

    function greenClick() {
        bigBoxTwo.innerHTML = `<p>Вы нажали ${numTwo} раз(а)</p>`
    }

    function reload_interval() {
        setTimeout(function() {
            location.reload();
        }, 2000);
    }
    button.addEventListener("click", num)
    buttonTwo.addEventListener("click", greenClick)
    buttonTwo.addEventListener("click", reload_interval)
}
button.onclick = all()