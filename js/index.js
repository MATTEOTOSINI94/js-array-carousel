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


const mainBox = document.querySelector("#main-box")
const sideBox = document.querySelector("#side-box")



let indice = 0

for (let x = 0; x < items.length; x++) {
    const itemsImg = items[x];
    const country = title[x]
    const textStyle = text[x]

    let activeStyle = ""
    let activeText= ""


    if ( x === indice){
        activeStyle = "active"
        activeText = "active-text"
        
    }

    const imgElement = `<img class="${activeStyle}" src="${itemsImg}" "alt=immagine #${x}">`
    console.log(imgElement)
    const textElement= `<h1 class="${activeText}">${country}</h1>`
    console.log(textElement)


    mainBox.innerHTML += imgElement 
    sideBox.innerHTML += imgElement
    mainBox.innerHTML += textElement
    

}
const arrowUp = document.querySelector(".arrow-up")
arrowUp.addEventListener("click", function(){

    const activeButton = document.querySelectorAll(".active")
    const activeTextStyle = document.querySelector(".active-text")
    console.log(activeButton)
    activeButton[0].classList.remove("active")
    activeButton[1].classList.remove("active")
    activeTextStyle.classList.remove("active-text")
   
    indice--
   
    const imgDom = document.querySelectorAll("#main-box img")
    const imgThumb =document.querySelectorAll("#side-box img")
    const styleText=document.querySelectorAll("h1")
    imgDom[indice].classList.add("active")
    imgThumb[indice].classList.add("active")
    styleText[indice].classList.add("active-text")




})

const arrowDown = document.querySelector(".bottom-arrow")
arrowDown.addEventListener("click", function(){

    const activeButton = document.querySelectorAll(".active")
    const activeTextStyle = document.querySelector(".active-text")
    console.log(activeButton)
    activeButton[0].classList.remove("active")
    activeButton[1].classList.remove("active")
    activeTextStyle.classList.remove("active-text")
   
    indice++
   
    const imgDom = document.querySelectorAll("#main-box img")
    const imgThumb =document.querySelectorAll("#side-box img")
    const styleText=document.querySelectorAll("h1")
    imgDom[indice].classList.add("active")
    imgThumb[indice].classList.add("active")
    styleText[indice].classList.add("active-text")
   
   })

