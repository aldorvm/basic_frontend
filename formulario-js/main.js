function registro() {
    var firstname = document.getElementById("fname").value;
    var secondname = document.getElementById("sname").value;
    var birthday = document.getElementById("fecha").value;
    var genere = document.getElementById("seleccion").value;
    var premium = document.getElementById("checkbox").checked;
    var description = document.getElementById("descripcion-txt").value;

    var usuario = {
        nombre: firstname,
        apellidos: secondname,
        nacimiento: birthday,
        genero: genere,
        cuenta: premium,
        descripcion: description
    };
    saveSessionStorage(usuario);
    saveLocalStorage(usuario);

    if(string===""){
        fname.style.display = "block";
        fname.style.color = "red";
        fname.innerHTML = "No se ha introducido ningún valor";
    }
}

function saveSessionStorage(item){
    window.sessionStorage.setItem("usuario", JSON.stringify(item));
}

function saveLocalStorage(item){
    window.localStorage.setItem("usuario", JSON.stringify(item));
}