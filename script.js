// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

  // 1. Agarra el botón que tiene el ID 'miBoton'
  const boton = document.getElementById('miBoton');

  // 2. Agarra el H1 (puedes darle un ID si quieres, pero agarremos la etiqueta)
  const titulo = document.querySelector('h1');

  // 3. Escucha un 'clic' en el botón
  boton.addEventListener('click', () => {

    // 4. Cuando ocurra el clic, cambia el texto del título
    titulo.textContent = 'Hecho. Sprint 1 completado.';
  });

});
