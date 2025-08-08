// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 01 Array para almacenar los nombres
const amigos = [];

// Referencias a elementos del DOM
const input = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Normlizar el input al presionar Enter
function nomralizar(txt) {
    return txt.trim().replace(/\s+/g, ' ');
}

// 02 Función para agregar un amigo al array
function agregarAmigo() {
    const nombre = nomralizar(input.value);

    if (!nombre) {
        alert('Por favor, ingresa un nombre válido.');
        input.focus();
        return;
    }

    // Evitamos duplicados
    const amigoExistente = amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());
    if (amigoExistente) {
        alert('El nombre ya existe en la lista.');
        input.focus();
        return;
    }

    // 03 Agregar el nombre al array y actualizar la lista
    amigos.push(nombre);
    input.value = '';
    input.focus();
    actualizarLista();
}

function actualizarLista() {
    resultado.innerHTML = '';

    if (amigos.length === 0) {
        resultado.innerHTML = '<p>No hay amigos en la lista.</p>';
        input.focus();
        return;
    }
    // 04 Actualizar la lista de amigos
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
    resultado.innerHTML = `<p>Amigos agregados: ${amigos.length}</p>`;
    input.focus();
}

function sortearAmigo() {
    if(amigos.length === 0) { alert('No hay amigos para sortear.'); return; }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    resultado.innerHTML = `<p>Amigo seleccionado: ${amigoSeleccionado}</p>`;
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        agregarAmigo();
    }
});