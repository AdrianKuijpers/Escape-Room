const btnResult = document.querySelector(".btnResult")
btnResult.addEventListener('click', result);


function result() {
    let score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }
    if (score == 4) {
        const divResult = document.querySelector(".divResult")
        divResult.textContent = ("3rd number is: 9")
    } else {
        const divResult = document.querySelector(".divResult")
        divResult.textContent = ("Wrong")
    }
}

const returnBtn = document.querySelector(".btn.btn-primary.return-btn")
returnBtn.addEventListener("click", function () {
    window.location.href = 'index.html';
});
