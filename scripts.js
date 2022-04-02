function compter() {
    ch = document.getElementById("string").value;
    y = document.getElementById("character").value;
    let s = 0;

    for (let i = 0; i < ch.length; i++) {
        if (y == ch[i]) { s++ }
    }

    document.getElementById("result").innerHTML = "le nombre d'occurences est : " + s;
}