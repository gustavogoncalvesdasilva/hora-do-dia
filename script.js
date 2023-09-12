function carregar(){
    msg = document.querySelector('#msg')
    img = document.querySelector('#imagem')
    sau = document.querySelector('#sau')
    data = new Date()
    hora = data.getHours()
    //hora = 
    min = new Date()
    minuto = min.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} `
    if (hora >= 0 && hora < 12)
    {
        //bom dia
        sau.innerHTML = 'Bom Dia'
        img.src = 'manha.png'
        document.body.style.background = '#6b4f27'
    }
    else if (hora >=12 && hora <= 18) 
    {
        //boa tarde
        sau.innerHTML = 'Boa Tarde'
        img.src = 'tarde.png'
        document.body.style.background = '#ef5401'
    }
    else {
        //boa noite 
        sau.innerHTML = 'Boa Noite'
        img.src = 'noite.png'
        document.body.style.background = '#0c1719'
    }

}

