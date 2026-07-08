let readOut = '0';

function pressN(clicked_innerHTML) {
    if (readOut == '0') {
        readOut = clicked_innerHTML;
    }
    else {
        readOut = readOut + clicked_innerHTML;
    }

    document.getElementById("readOut").innerHTML = readOut;
}

function pressOp(clicked_innerHTML) {
    if (readOut != 0) {
        readOut = readOut + clicked_innerHTML;
    }
    document.getElementById("readOut").innerHTML = readOut;
}

function pressEq() {
    readOut = eval(readOut);
    document.getElementById("readOut").innerHTML = readOut;
}

function pressClr() {
    readOut = '0';
    document.getElementById("readOut").innerHTML = readOut;
}
document.getElementById("readOut").innerHTML = readOut;