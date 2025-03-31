console.log("Prueba")

function adding() {
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var price = document.getElementById("price").value;
    var items = document.getElementById("items").value;

    var content = JSON.parse(sessionStorage.getItem("content"));
    if (content == null) content = [];


    if (name || description || price || items) {

        var info = {
            nombre: name,
            descripcion: description,
            precio: price,
            cantidad: items,
        };


        sessionStorage.setItem("list", JSON.stringify(info));


        console.log('test', content);

        content.push(info);
        sessionStorage.setItem("content", JSON.stringify(content));


    }
    else {
        alert("Por favor, rellene todos los campos");

    }
}


function buylist() {
    // document.getElementById("cart").innerHTML = "";
    // for (var i = 0; i < purchase.length; i++) {
    // }
}

function getpurchase() {
    return
}

// function checkform(purchase) {
//     if (purchase.nombre === "" || purchase.descripcion === "" || purchase.precio === "" || purchase.cantidad === "") {
//         alert("Por favor, rellene todos los campos");
//         return false;
//     }
//     return true;
// }