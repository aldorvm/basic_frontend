// TENEMOS EL SIGUIENTE CÓDIGO REPETIDO Y HAY QUE OPTIMIZARLO

// function testMe() {

//     var element = document.getElementById("test");
//     element.innerHTML = "Test passed!";
//     element.style.color = "green";
//     console.log("Test passed!");

//     var element = document.getElementById("prueba");
//     element.innerHTML = "Test passed!";
//     element.style.color = "green";
//     console.log("Test passed!");

//     var element = document.getElementById("elementos");
//     element.innerHTML = "Test passed!";
//     element.style.color = "green";
//     console.log("Test passed!");

//     var element = document.getElementById("menta");
//     element.innerHTML = "Test passed!";
//     element.style.color = "green";
//     console.log("Test passed!");

// }

function testMe() {
    fillHtmlElement("test", "green");
    fillHtmlElement("prueba", "green");
    fillHtmlElement("elementos", "green");
    fillHtmlElement("menta", "green");
}

function fillHtmlElement(nameOfTheId, nameOfTheColor) {
    var element = document.getElementById(nameOfTheId);
    element.innerHTML = "Test passed!";
    element.style.color = nameOfTheColor;
    console.log("Test passed!");
}