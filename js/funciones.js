function validarVacios(){
            
            if(document.frmPedido.nombre.value.length == 0){
                alert("Por favor ingrese un nombre");
                document.frmPedido.nombre.focus();
            }
            if(document.frmPedido.apellido.value.length == 0){
                alert("Por favor ingrese un apellido");
                document.frmPedido.apellido.focus();
            }
            if(document.frmPedido.tel.value.length == 0){
                alert("Por favor ingrese un número de teléfono");
                document.frmPedido.tel.focus();
            }else if (document.frmPedido.tel.value.length>10) {
                alert("Solo puede ingresar 10 números.")
                document.frmPedido.tel.focus();
            }
            if(document.frmPedido.dir.value.length == 0){
                alert("Por favor ingrese una dirección");
                document.frmPedido.dir.focus();
                return 0;
            }else{
                //alert("Todos los datos han sido ingresados correctamente");
                
            }
}

var zFondos150 = ["./Imagenes/Pay2.jpg","./Imagenes/Pay2.jpg","./Imagenes/Pay2.jpg"];
var zFondos600 = ["./Imagenes/Pay2.jpg","./Imagenes/Pay2.jpg","./Imagenes/Pay2.jpg"];

var imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
var subImagenes = document.querySelectorAll('[class *= "subImagen-"]');

imagenPrincipal.style.backgroundImage =zFondos600[0];
subImagenes[0].style.backgroundImage =zFondos150[0];
subImagenes[1].style.backgroundImage =zFondos150[1];
subImagenes[2].style.backgroundImage =zFondos150[2];

subImagenes[0].addEventListener("mouseover",accion0);
subImagenes[1].addEventListener("mouseover",accion1);
subImagenes[2].addEventListener("mouseover",accion2);

function accion0(){imagenPrincipal.style.backgroundImage =zFondos600[0];}
function accion1(){imagenPrincipal.style.backgroundImage =zFondos600[1];}
function accion2(){imagenPrincipal.style.backgroundImage =zFondos600[2];}