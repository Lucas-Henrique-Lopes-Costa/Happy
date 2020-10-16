//create map
const map = L.map('mapid').setView([-20.1480625,-44.8850062], 15);

// create and add title
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// create icon
const icon = L.icon ({
    iconUrl: "/images/map-marker.svg", 
    iconSize: [58,68],
    iconAnchor: [29, 68]
})

let needLatAndLng;

// create and add marker
let marker; // você pode alterar

map.on('click', (event) => { // ele é chamado toda fez que tem um click no mapa
    // console.log(event) // mostra a latitute e longitute

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //colocando a longitute e latitute na url
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    // remove icon
    marker && map.removeLayer(marker)//se tiver um valor no map => retire

    
    // add icon layer
    marker = L.marker([lat, lng], { icon }) // ele está ouvindo e pega o valor para adicionar um ponto
    .addTo(map)
})

// Adicionar o campo de fotos
function addPhotoField() {

    // pegar o container de Fotos => #images
        const container = document.querySelector('#images')

    // pegar o container para DUPLICAR => .new-image
        const fieldsContainer = document.querySelectorAll('.new-upload')
        
    // realizar a duplicação da última imagem adicionada
        const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
        // o array começa a contar no 0, por isso deve-se subtrair 1

    // verificar se o campo está vazio => se sim => não adicionar
        const input = newFieldContainer.children[0] // primeiro campo
    
        if (input.value == "") { // se o input estiver vazio este valor sera "true" e assim ele exetuta =>
            return
        }
    // se não ele continua...

    // VOCÊ DEVE LIMPAR O CAMPO ANTES DE ADICIONAR
        input.value = ""

    // adicionar o clone ao cointainer em #images
        container.appendChild(newFieldContainer)
}

// Deletando o capo de fotos não desejados
function deleteField (event) {
    // console.log(event.currentTarget) //quem está disparando o evento
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    // console.log(fieldsContainer.length)

    if(fieldsContainer.length < 2) {
        span.parentNode.children[0].value = "" // na primeira opção ele apaga o escrito
        return
    }

    //deletar o CAMPO
    span.parentNode.remove() // se clicar no "X" e estiver vazio => apaga o campo

}

// Select: SIM ou NÃO

function toggleSelect (event) {
    
    // retirar a class .active dos botões clicados
        document.querySelectorAll('.button-select button') // return o "for each" para cada botão
        
        // .forEach(button => button.classList.remove('active'))//isso é uma função muito reduzida
        
        .forEach(function (button) { // para cada botao faça =>
            button.classList.remove('active')
        })
    
    // colocar a class .active no botão clicado
        const button = event.currentTarget
        button.classList.add('active')

    // atualizar o meu input hidden com calor selecionado
        const input = document.querySelector('[name="open_on_weekends"]')
        // console.log(input)

    // verificar se SIM ou NÃO
        input.value = button.dataset.value // de acordo com o valor dos botões (sim = 1 | não = 0)
    
    // pegar o botão CLICADO
}

function validade(event) {
    // validar se lat e lng estão preenchidos
    if (marker != "") {
        event.preventDefault() // não envia o formulário
        alert("Escolha um ponto no mapa")    
    }
}