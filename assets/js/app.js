const listatwets= document.getElementById('lista-tweets')

//event listeners
eventlistener()

function eventlistener(){
    //cuando se envia el form
    document.querySelector('#formulario').addEventListener(
        'submit',agregartweet)
    
}



//añadir tweet
function agregartweet(e){
    e.preventDefault()
    console.log('enviado')
    const tweet =document.getElementById('tweet').value
    console.log(tweet)

    const botonborrar = document.createElement('a')
    botonborrar.classList= 'borrar-tweet'
    botonborrar.innerHTML= 'X'

    const li = document.createElement('li')
    li.innerHTML=tweet
    //añade boton de borrar
    li.appendChild(botonborrar)
    //añade tweet a la lista
    listatwets.appendChild(li)

}