const evento = document.getElementById('send')
const enviarFormulario =() => {
        let names = document.getElementById('names').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
		let asunto = document.getElementById('asunto').value;
		let mensaje = document.getElementById('mensaje').value;
		let numero= escribeaquielnumerodetelefono;
		
var win= window.open(`https://wa.me/${numero}?text=
Solicitud%20de%20Cita%20Medica%0A
Nombre%20y%20Apellido:%20${names}%0A
Telefono:%20${phone}%0A 
Correo:%20${email}%0A 
Asunto:%20${asunto}%0A 
Detalles:%20${mensaje}%0A 
`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)