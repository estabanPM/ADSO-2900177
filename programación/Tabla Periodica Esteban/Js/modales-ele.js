const elemento =[
    { id: "modal-1", name: "Hidrógeno", description: "Elemento más ligero." },
    { id: "modal-2", name: "Helio", description: "Segundo elemento más ligero." },
    { id: "modal-3", name: "Litio", description: "tercer elemento más ligero." },
    { id: "modal-4", name: "Berilio", description: "cuarto elemento más ligero." },
    { id: "modal-5", name: "Boro", description: "quinto elemento más ligero." },
    { id: "modal-6", name: "Boro", description: "quinto elemento más ligero." },
    { id: "modal-7", name: "Boro", description: "quinto elemento más ligero." },
    { id: "modal-8", name: "Boro", description: "quinto elemento más ligero." },
    { id: "modal-9", name: "Boro", description: "quinto elemento más ligero." },
    { id: "modal-10", name: "Boro", description: "quinto elemento más ligero." },
    { id: "modal-11", name: "Boro", description: "quinto elemento más ligero." },
    { id: "modal-12", name: "Boro", description: "quinto elemento más ligero." },
    { id: "modal-13", name: "Boro", description: "quinto elemento más ligero." },
    { id: "modal-14", name: "Boro", description: "quinto elemento más ligero." },
    { id: "modal-15", name: "Boro", description: "quinto elemento más ligero." },
]

const modales = document.getElementById("modales-elemento");

elemento.forEach(element => {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = element.id;
    modal.setAttribute('aria-labelledby', `modalLabel-${element.id}`);
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="${element.id}">${element.name}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ${element.description}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>`;
    modales.appendChild(modal); // Agregar el modal al contenedor de modales
});