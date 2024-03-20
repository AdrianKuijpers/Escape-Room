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
    if (score == 3) {
        const divResult = document.querySelector(".divResult")
        divResult.textContent = ("2nd number is: 6")
    } else {
        const divResult = document.querySelector(".divResult")
        divResult.textContent = ("Wrong")
    }
}

const returnBtn = document.querySelector(".btn.btn-primary.return-btn")
returnBtn.addEventListener("click", function () {
    window.location.href = 'index.html';
});
