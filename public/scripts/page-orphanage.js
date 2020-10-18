const options = {
    dragging: false,
    touchZoom: false,
    doubleClickCoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// get values from html
const lat = document.querySelector('span[data-lat').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid', options).setView([lat, lng], 15);

// create and add title
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    // Pegando do Streat Map
    // {
    // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


// Create and add marker | Adicionar um pop-up
L.
marker([lat, lng], {
        icon
    }) // marcação | procura a variável
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

    function removeActiveClass(button) {
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