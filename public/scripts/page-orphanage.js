const options = {
    dragging: false,
    touchZoom: false,
    doubleClickCoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-20.1480625,-44.8850062], 16);

// create and add title
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    // Pegando do Streat Map
    // {
    // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }
).addTo(map);

// create icon

const icon = L.icon ({
    iconUrl: "../public/images/map-marker.svg", 
    iconSize: [58,68],
    iconAnchor: [29, 68],
    iconAnchor: [170, 2]
})


// Create and add marker | Adicionar um pop-up
L.
marker([-20.1480625,-44.8850062], { icon })// marcação | procura a variável
.addTo(map) // adiciona ao mapa

// Image Gallary

function selectImage(event) { //quando o button é clicado ele realiza as ações
    const button = event.currentTarget
    
    // console.log('Cliquei')

    // REMOVENDO TODOAS AS CLASSE ".active"
        const buttons = document.querySelectorAll(".images button")

        // console.log(buttons) //ver o que está dentro do array

        // fazendo a função de remover

            // FORMA CURTA
            // buttons.forEach((button) => {
            //     button.classList.remove("active")
            // })
            
            // ou    
            
            buttons.forEach(removeActiveClass) //para cada botão faça essa funcionalidade

            function removeActiveClass (button) {
                button.classList.remove("active")
            }

    // SELECIONAR A IMAGEMM CLICADA
        const image = button.children[0]
        const imageContainer = document.querySelector('.orphanage-details > img') // pegando o Container

    // ATUALIZAR O CANTEINER DE IMAGEM (IMAGEM GRANDE)
        imageContainer.src = image.src // mudando o src do Container

    // ADICIONAR A CLASSE ".active" PARA O BOTÃO CLICADO
        button.classList.add('active')
        
}