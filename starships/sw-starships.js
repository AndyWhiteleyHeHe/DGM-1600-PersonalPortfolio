import { starships } from "../../Downloads/starships";
import { getLastNumber, removeChildren } from "../utils/index.js"

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navlist')
const shipView = document.querySelector('.displaySelection')

const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('modal-background')

closeButton.addEventListener('click', () => { modal.classList.toggle('is-active')}
modalBackground.addEventListener('click', () => modal.classList.toggle('is-active'))

function populateNav(starships) {
    starships.array.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        let listItem = document.createElement('li')
        listItem.textContent = starship.name
        anchorWrap.addEventListener('click', () => {
            
        })
        
        anchorWrap.appendChild(listItem)
        
        navList.appendChild(anchorWrap)
    })
}

populateView(starships)

function populateShipView(shipData) {
    removeChildren(shipView)
    console.log(`Thanks for clicking on ${shipData.name}`)
    let shipImage = document.createElement('img')
    shipImage.src = 'https://starwars-visualguide.com/assets/img/starships/2.jpg'
    shipView.appendChild(shipImage)
    let shipNum = getLastNumber(shipData.url)
    shipImage.addEventListener('error', () => {shipImage.hidden = true
        modal.classList.toggle('is-active')
        missingMessage.textContent = 'this ship ${shipData.name) has been canceled.'
    }