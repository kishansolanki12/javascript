function count() {
    var word = document.getElementById("wordInput").value;
    var wordLength = word.trim().length;
    document.getElementById("wordLength").textContent = wordLength;
}