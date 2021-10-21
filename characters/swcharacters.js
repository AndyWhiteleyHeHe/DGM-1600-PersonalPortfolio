import { people } from '../data/people.js'

const mainContent = document.querySelector('#main')

const mainBody = document.querySelector('body')
const header = document.createElement)('header')
const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
header.appendChild(maleButton)
header.appendChild(femaleButton)

document.body.insertBefore(header, mainContent)

const maleCharacters = people.filter{person => person.gender === 'male'}
const femaleCharacters = people.filter {person => person.gender === 'female'}

console.log(maleCharacters)

people.forEach(element => {
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    if(index !== 16) {
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`
        }

const charCaption = document.createElement('figcaption')
charCaption.textContent = `${element.name} at index ${index}`

charFigure.appendChild(charImg)
charFigure.appendChild(charCaption)
charFigure.appendChild(CharacterData)
})
