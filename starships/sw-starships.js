import { starships } from "../../Downloads/starships";

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navlist')
const shipView = document.querySelector('.displaySelection')

function populateNav(starships) {
    starships.array.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        let listItem = document.createElement('li')
        listItem.textContent = starship.name
        anchorWrap.addEventListener('click', () => {
            
        })
        
        anchorWrap.appendChild(listItem)
        
        navList.appendChild(listItem)
    })
}

populateView(starships)

function populateShipView(shipData) {
    console.log('Thanks for clicking on ${shipData.name}')
    let shipImage = document.createElement('img')
    shipImage.src = 'https://starwars-visualguide.com/assets/img/starships/2.jpg'
    shipView.appendChild(shipImage)
}