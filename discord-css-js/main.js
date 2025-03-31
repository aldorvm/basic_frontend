document.getElementById("button").addEventListener("click", function () {
    alert("Mail: " + document.getElementById("mail").value + "\nPassword: " + document.getElementById("password").value);
});

document.getElementById("sumbutt").addEventListener("click", function () {
    var res = parseInt(document.getElementById("num1").value) + parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = res;

    if (res > 0) {
        document.getElementById("result").style.backgroundColor = "green";
    } else {
        document.getElementById("result").style.backgroundColor = "red";
    }
});