document.addEventListener("DOMContentLoaded", () => {

    const grupos = [
        { id: "smx_a", nombre: "1SMX_A" },
        { id: "smx_b", nombre: "1SMX_B" }
    ];

    const panel = document.createElement("div");
    panel.className = "marcadores-clase";

    grupos.forEach(grupo => {

        const bloque = document.createElement("div");
        bloque.className = "marcador-grupo";

        const titulo = document.createElement("span");
        titulo.className = "marcador-titulo";
        titulo.textContent = grupo.nombre;

        const guardar = document.createElement("button");
        guardar.textContent = "📍 Guardar aquí";
        guardar.title = `Guardar posición de ${grupo.nombre}`;

        guardar.addEventListener("click", () => {

            const marcador = {
                pagina: window.location.pathname,
                posicion: window.scrollY
            };

            localStorage.setItem(
                `marcador_${grupo.id}`,
                JSON.stringify(marcador)
            );

            actualizarEstado();

            guardar.textContent = "✓ Guardado";

            setTimeout(() => {
                guardar.textContent = "📍 Guardar aquí";
            }, 1500);
        });

        const ir = document.createElement("button");
        ir.textContent = "➡ Ir";
        ir.title = `Ir al marcador de ${grupo.nombre}`;

        ir.addEventListener("click", () => {

            const datos = localStorage.getItem(
                `marcador_${grupo.id}`
            );

            if (!datos) {
                alert(`Todavía no hay marcador para ${grupo.nombre}`);
                return;
            }

            const marcador = JSON.parse(datos);

            sessionStorage.setItem(
                "restaurar_scroll",
                marcador.posicion
            );

            if (window.location.pathname === marcador.pagina) {

                window.scrollTo({
                    top: marcador.posicion,
                    behavior: "smooth"
                });

                sessionStorage.removeItem("restaurar_scroll");

            } else {

                window.location.href = marcador.pagina;
            }
        });

        const estado = document.createElement("span");
        estado.className = "marcador-estado";
        estado.id = `estado_${grupo.id}`;

        bloque.appendChild(titulo);
        bloque.appendChild(guardar);
        bloque.appendChild(ir);
        bloque.appendChild(estado);

        panel.appendChild(bloque);
    });

    document.body.appendChild(panel);

    function actualizarEstado() {

        grupos.forEach(grupo => {

            const estado = document.getElementById(
                `estado_${grupo.id}`
            );

            const datos = localStorage.getItem(
                `marcador_${grupo.id}`
            );

            estado.textContent = datos ? "●" : "○";
            estado.title = datos
                ? "Marcador guardado"
                : "Sin marcador";
        });
    }

    actualizarEstado();

    const restaurar = sessionStorage.getItem("restaurar_scroll");

    if (restaurar !== null) {

        setTimeout(() => {

            window.scrollTo({
                top: Number(restaurar),
                behavior: "smooth"
            });

            sessionStorage.removeItem("restaurar_scroll");

        }, 300);
    }

});