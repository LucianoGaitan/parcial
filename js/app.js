

function validarDatos(){
    event.preventDefault();
     let nombre=document.getElementById('txtNombre').value;
 let apellido=document.getElementById('txtApellido').value;
 let dirreccion=document.getElementById('txtDireccion').value;
 let email=document.getElementById('txtemail').value;
 let telefono=document.getElementById('txtTelefono').value;
 let habitacion=document.getElementById('cboHabitacion');
 let fecha=document.getElementById('ingreso').value;
 habitacionSeleccionado=habitacion.options[habitacion.selectedIndex].value;
 let cochera=false;
 let rbnConcher=document.getElementsByName('cochera');
 
 
 
 
     if(nombre ===''){
         alert('Ingrese un Nombre');
         return false;
     }
     if(apellido===''){
      alert('Ingrese un  Apellido');
         return false;
      }
      if(telefono===''){
         alert('complete el telefeno');
         return false;
     }
      if(dirreccion===''){
      alert('complete la direccion');
      return false;
      }
      if(email===''){
       alert('complete el  email');
       return false;
      }
 
      if(habitacionSeleccionado ===""){
          alert('Seleccione una habitacion')
          return false;
      }
      if(fecha===''){
        alert('complete la fecha');
        return false;
       }
       for(let i=0;i<rbnConcher.length;i++){
           if(rbnConcher[i].checked){
               cochera=true;
               break;
           }
       }
       if(cochera==false){
           alert('Seleccione si Necesita Cochera');
           return false;
       }


       
  
     return true;
    
 
 }
 
 function exito(){
 
     let nombre=document.getElementById('txtNombre').value;
     let fecha=document.getElementById('ingreso').value;
     if(validarDatos()){
 
         alert(nombre +'  ' +'la reserva  fue tomada con exito'+' '+'para el dia :' +fecha);
     }
 }
