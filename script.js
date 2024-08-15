
const solicitudes = document.querySelectorAll(".profiles");
const ok_button = document.querySelectorAll(".button_ok");
const no_button = document.querySelectorAll(".button_no");
const solicitudes_conexion = document.querySelector(".conexion h1");
const tus_conexiones = document.querySelector(".tus-conexiones h1");
const edit_profile = document.querySelector(".texto button");
const nombre = document.querySelector(".texto h1");

let connections = 2;
let your_connections = 500;


/*ok_button[0].addEventListener("click", function(){
    connections--;
    your_connections++;
    solicitudes[0].remove();
    solicitudes_conexion.innerText = `Solicitudes de Conexión (${connections})`;
    tus_conexiones.innerText = `Tus Conexiones (${your_connections}+)`;
});*/

/*ok_button[1].addEventListener("click", function(){
    connections--;
    your_connections++;
    solicitudes[1].remove();
    solicitudes_conexion.innerText = `Solicitudes de Conexión (${connections})`;
    tus_conexiones.innerText = `Tus Conexiones (${your_connections}+)`;
});*/

/*no_button[0].addEventListener("click", function(){
    connections--;
    your_connections++;
    solicitudes[0].remove();
    solicitudes_conexion.innerText = `Solicitudes de Conexión (${connections})`;
    tus_conexiones.innerText = `Tus Conexiones (${your_connections}+)`;
});

no_button[1].addEventListener("click", function(){
    connections--;
    your_connections++;
    solicitudes[1].remove();
    solicitudes_conexion.innerText = `Solicitudes de Conexión (${connections})`;
    tus_conexiones.innerText = `Tus Conexiones (${your_connections}+)`;
});*/

ok_button.forEach((button, index) => {
    button.addEventListener("click", function(){
        connections--;
        your_connections++;
        solicitudes[index].remove();
        solicitudes_conexion.innerText = `Solicitudes de Conexión (${connections})`;
        tus_conexiones.innerText = `Tus Conexiones (${your_connections}+)`;
    });
});

no_button.forEach((button, index) => {
    button.addEventListener("click", function(){
        connections--;
        solicitudes[index].remove();
        solicitudes_conexion.innerText = `Solicitudes de Conexión (${connections})`;
        tus_conexiones.innerText = `Tus Conexiones (${your_connections}+)`;
    });
});

edit_profile.addEventListener("click", function(){
    nombre.innerText = "Sophia Larsen";
});