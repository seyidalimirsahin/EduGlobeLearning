function checkAnswer() {
    const ans = document.getElementById("answer").value;
    const result = document.getElementById("result");
    if (ans == 2) {
        result.textContent = "Doğru!";
    } else {
        result.textContent = "Yanlış, təkrar cəhd et.";
    }
}
