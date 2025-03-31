function calc(operation) {

    if (operation === "sum") {
        var res = parseInt(document.getElementById("num1").value) + parseInt(document.getElementById("num2").value);
    } else {
        var res = parseInt(document.getElementById("num1").value) * parseInt(document.getElementById("num2").value);
    }

    const calculator = {
        Numero1: document.getElementById("num1").value,
        Numero2: document.getElementById("num2").value,
        Resultado: res
    }
    console.log(calculator);
    reglocal("register", calculator);
}

function reglocal(localdata, calculator) {
    var datos = JSON.parse(window.localStorage.getItem(localdata)) || [];
    datos.push(calculator);
    window.localStorage.setItem(localdata, JSON.stringify(datos));
}

// function reglocal(calculator) {
//     window.localStorage.setItem("register", JSON.stringify(calculator));
// };

// function getlocal() {
//     return JSON.parse(window.localStorage.getItem("register")) || [];
// };