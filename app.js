function agregarTarea(datos) {

    var html = $("#lista-tareas").html() + 
    `
        <li class="list-group-item" id="${datos.id}">
            <div class="row">
                <div class="col-1">
                    <input type="checkbox" 
                            class="form-control" 
                            onchange="cambiarEstatus(${datos.id})">
                </div>
                <div class="col-10 row">
                    <div class="col-9 h5">
                        ${datos.titulo}
                    </div>
                    <div class="col-3 text-right">
                        <i>${datos.fecha}</i>
                    </div>
                    <div class="col-12 text-justify">
                        ${datos.descripcion}
                    </div>
                </div>
                <div class="col-1">
                    <button class="btn btn-danger" onclick="borraTarea(${datos.id})">&times;</button>
                </div>
            </div>
        </li>
    ` ;
    
    $("#lista-tareas").html(html);
}

function muestraAlerta( mensaje ) {
    $("#alerta").text(mensaje);
    $("#alerta").show(1000);
}

function borraTarea(id) {
    $("#"+id).hide(800,function() {
        $(this).remove();
    });
}

function cambiarEstatus(id) {
    $("#"+id).toggleClass("bg-success");

}

$(document).ready(function(){
 
    $("#alerta").hide(0);

    $("#forma").submit( function(e){
            e.preventDefault();

            var titulo      = $("#titulo").val();
            var fecha       = $("#fecha").val();
            var descripcion = $("descripcion").val();

            if(titulo.trim() ==="")
            {
                muestraAlerta("EL titulo no puede estar vacio");
                return;
            }
            if(fecha ==="")
            {
                muestraAlerta("La fecha no puede estar vacia");
                return;
            }


            var datos = {
                titulo,
                fecha,
                descripcion,
                id:Date.now()
            };

            agregarTarea(datos);

            $("#titulo").val("");
            $("#fecha").val("");
            $("descripcion").val("");
    } );
    
});