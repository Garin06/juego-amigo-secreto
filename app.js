// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function condicionesIniciales()
{
    mostrarLista('p', ''); 
    mostrarLista('h3', ''); 
    return;
}

function agregarAmigos()
{
    let nombreAmigo = document.querySelector('#amigo').value;
    let caracterValido = /^[A-Za-záéíóúÁÉÍÓÚñÑ]+(\s[A-Za-záéíóúÁÉÍÓÚñÑ]+)*$/;

    if (nombreAmigo != '' && caracterValido.test(nombreAmigo) && nombreAmigo.length > 2)
    {
        let nombreNormalizado = nombreAmigo.toLowerCase().replace(/\b\w/g, letra => letra.toUpperCase());

        if (listaAmigos.includes(nombreNormalizado)) 
        {
            alert(`El nombre "${nombreNormalizado}" ya está en la lista de amigos, prueba ingresando un apellido`);
            limpiarCaja();
        } 
        else
        {
        listaAmigos.push(nombreNormalizado);
        mostrarLista('h3', `<b>Tu lista de amigos es:</b> <br><center> ${listaAmigos.join('<br>')}`);              
        limpiarCaja();
        }
    }
    else 
    {
        if (nombreAmigo == '')
        {
            alert(`Por favor agrega un nombre`);
            limpiarCaja();
        }
        else if (!caracterValido.test(nombreAmigo))
        {
            alert(`No es posible agregar caracteres especiales`);
            limpiarCaja();
        }
        else
        {
            alert(`El nombre ingresado es demasiado corto`);
            limpiarCaja();
        }

    }
    return;
}

function limpiarCaja()
{
    document.getElementById('amigo').value = '';
    return;
}

function mostrarLista(elemento, texto) 
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

    if (elemento === "p")
    {
        elementoHTML.classList.remove("mostrar"); 
        void elementoHTML.offsetWidth; 
        elementoHTML.classList.add("mostrar"); 
    }
}

function amigoSecreto()
{
    if (listaAmigos.length == 0)
    {
        condicionesIniciales();
        alert('Tu lista de amigos está vacía, por favor agrega amigos');
    }
    else
    {
        let indiceSecreto = Math.floor(Math.random()*listaAmigos.length);

        if(listaAmigos.includes(indiceSecreto))
        {
            return amigoSecreto();
        }
        else
        {
            mostrarLista('p', `El amigo secreto es: <br> <b>${listaAmigos[indiceSecreto]}</b>`); 
            listaAmigos.splice(indiceSecreto, 1);
            if(listaAmigos == '')
            {
                mostrarLista('h3', '');
            }
            else
            {
                mostrarLista('h3', `<b> Tu lista de amigos es: </b> <br> ${listaAmigos.join('<br>')}`);
                console.log(listaAmigos);
                return indiceSecreto;
            }
        }
    }
    return;
}

function eliminarUltimoAmigo() 
{
    if (listaAmigos.length > 0) 
    {
        listaAmigos.pop();
            if (listaAmigos.length === 0) 
            {
                mostrarLista('h3', ''); 
            }    
            else 
            {
                mostrarLista('h3', `<b>Tu lista de amigos es:</b> <br><center> ${listaAmigos.join('<br>')}`);
            }
    } 
    else    
    {
        alert("No hay amigos en la lista para eliminar");
    }
}

document.getElementById("eliminarUltimo").addEventListener("click", eliminarUltimoAmigo);

function F5()
{
    if (confirm("¿Quieres reiniciar el juego?")) 
    {    
        location.reload();
    }        
    return;
}

function inicio()
{   
    location.reload();
    return;
}

  document.addEventListener('keydown', function(event)
    {
        if(event.key == 'Enter')
        {
            agregarAmigos();
            return;
        }
    });