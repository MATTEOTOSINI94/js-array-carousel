const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor situscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Lorem ipsum, dolor situscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// VADO A CREARE DUE SELETTORI PER SELENZIONARE I BOX NEL CUI ANDRò INSERIRE LE IMMAGGINI IL TITOLO E IL TESTO[I 3 ARRAY]
const mainBox = document.querySelector("#main-box")
const sideBox = document.querySelector("#side-box")

// VADO A CREARE UNA VARIABILE INDICE PER POI PETER GESTIRE LA NUMERAZIONE 
let indice = 0

// VADO A CREARE UN CICLO CHE MI FACCIA GIRARE LE IMMAGINI 
for (let x = 0; x < items.length; x++) {
    // CREO DUE COSTANTI A CUI DARò COME INDICE ZERO PER ADESSO AFFINCHè NEL IF LE CLASSI SI ATTIVINO SOLO SU QUEL INDICE
    const itemsImg = items[x];
    const country = title[x]
    const newsText = text[x] 
    
    // CREO DUE VARIABILI PER POI ASSEGNARE LE CLASSI AI MIEI ELEMENTI 
    let activeStyle = ""
    let activeText = ""
    let activeNews = ""

    // SE LA INDICE[X] è ZERO ATTIVA LE DUE vas
    if ( x === indice){
        activeStyle = "active"
        activeText = "active-text"
        activeNews = "active-news"
        
    }

    const imgElement = `<img class="${activeStyle}" src="${itemsImg}" "alt=immagine #${x}">`
    console.log(imgElement)
    const textElement= `<h1 class="${activeText}">${country}</h1>`
    console.log(textElement)
    const newsElement=  `<p class="${activeNews}">${newsText}</p>`


    mainBox.innerHTML += imgElement 
    sideBox.innerHTML += imgElement
    mainBox.innerHTML += textElement
    mainBox.innerHTML += newsElement
}
const arrowUp = document.querySelector(".arrow-up")
arrowUp.addEventListener("click", function(){

    const activeButton = document.querySelectorAll(".active")
    const activeTextStyle = document.querySelector(".active-text")
    const activeNewsStyle = document.querySelector(".active-news")
    
    console.log(activeButton)
    activeButton[0].classList.remove("active")
    activeButton[1].classList.remove("active")
    activeTextStyle.classList.remove("active-text")
    activeNewsStyle.classList.remove("active-news")

   
    indice--


    console.log("nuovo indice",indice)
    const imgDom = document.querySelectorAll("#main-box img")
    const imgThumb =document.querySelectorAll("#side-box img")
    const styleText=document.querySelectorAll("h1")
    const styleNews=document.querySelectorAll("p")

    
    if(indice < 0){
        indice= items.length -1
    }

    imgDom[indice].classList.add("active")
    imgThumb[indice].classList.add("active")
    styleText[indice].classList.add("active-text")
    styleNews[indice].classList.add("active-news")





})

const arrowDown = document.querySelector(".bottom-arrow")
arrowDown.addEventListener("click", function(){

    const activeButton = document.querySelectorAll(".active")
    const activeTextStyle = document.querySelector(".active-text")
    const activeNewsStyle = document.querySelector(".active-news")
    
    console.log(activeButton)
    activeButton[0].classList.remove("active")
    activeButton[1].classList.remove("active")
    activeTextStyle.classList.remove("active-text")
    activeNewsStyle.classList.remove("active-news")

   
    indice++


    console.log("nuovo indice",indice)
    const imgDom = document.querySelectorAll("#main-box img")
    const imgThumb =document.querySelectorAll("#side-box img")
    const styleText=document.querySelectorAll("h1")
    const styleNews=document.querySelectorAll("p")

    
    if(indice > 4){
        indice= items.length -5
    }

    imgDom[indice].classList.add("active")
    imgThumb[indice].classList.add("active")
    styleText[indice].classList.add("active-text")
    styleNews[indice].classList.add("active-news")


   })

