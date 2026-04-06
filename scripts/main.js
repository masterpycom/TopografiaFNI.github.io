/**
 * main.js — Lógica de la página principal
 * Topografía I & II – Franz Grover Trujillano Choque
 */

/**
 * Cambia entre los paneles de Topografía I y Topografía II.
 * @param {'t1'|'t2'} tab - Identificador de la pestaña a activar.
 */
function switchTab(tab) {
    const isT1 = tab === 't1';

    // Mostrar / ocultar paneles
    document.getElementById('panel-t1').classList.toggle('active', isT1);
    document.getElementById('panel-t2').classList.toggle('active', !isT1);

    // Actualizar estado visual de los botones
    const btnT1 = document.getElementById('tab-t1');
    const btnT2 = document.getElementById('tab-t2');

    btnT1.className = isT1  ? 'tab-btn active-t1' : 'tab-btn';
    btnT2.className = !isT1 ? 'tab-btn active-t2' : 'tab-btn';

    // Accesibilidad: aria-selected
    btnT1.setAttribute('aria-selected', isT1  ? 'true' : 'false');
    btnT2.setAttribute('aria-selected', !isT1 ? 'true' : 'false');
}
