const elementsData = [
    { id: "modal-1", name: "Hidrógeno", description: "Elemento más ligero." },
    { id: "modal-2", name: "Helio", description: "Segundo elemento más ligero." },
    { id: "modal-3", name: "Helio", description: "Segundo elemento más ligero." },
    { id: "modal-4", name: "Helio", description: "Segundo elemento más ligero." },
    { id: "modal-5", name: "Helio", description: "Segundo elemento más ligero." },
    // Agrega más elementos aquí si es necesario
];

// Obtener el contenedor de modales
const modalsContainer = document.getElementById('modals-container');

// Crear el elemento modal
elementsData.forEach(element => {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = element.id;
    modal.tabIndex = '-1';
    modal.setAttribute('aria-labelledby', `modalLabel-${element.number}`);
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="${element.name}">${element.name}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

            ${element.number}
                ${element.description}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>`;
// Agregar el modal al contenedor de modales
modalsContainer.appendChild(modal);
});
// Generar los modales
// elementsData.forEach(element => {
//     const modal = document.createElement('div');
//     modal.className = 'modal fade';
//     modal.id = element.id;
//     modal.tabIndex = '-1';
//     modal.setAttribute('aria-labelledby', `modalLabel-${element.number}`);
//     modal.setAttribute('aria-hidden', 'true');
//     modal.innerHTML = `
//         <div class="modal-dialog">
//             <div class="modal-content">
//                 <div class="modal-header">
//                     <h5 class="modal-title" id="modalLabel-${element.number}">${element.name} (${element.symbol})</h5>
//                     <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <div class="modal-body">
//                     <p><strong>Número Atómico:</strong> ${element.number}</p>
//                     <p><strong>Descripción:</strong> ${element.description}</p>
//                 </div>
//                 <div class="modal-footer">
//                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
//                 </div>
//             </div>
//         </div>`;
//     modalsContainer.appendChild(modal);
// });

