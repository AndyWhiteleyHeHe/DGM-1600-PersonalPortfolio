import { people } from '../data/people.js'

const mainContent = document.querySelector('#main')

const mainBody = document.querySelector('body')
const header = document.createElement)('header')
const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'

maleButton.addEventListener('click', () => populateDOM(maleCharacters))


const femaleButton = document.createElement('button')
femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))
femaleButton.textContent = 'Female Characters'

header.appendChild(maleButton)
header.appendChild(femaleButton)

document.body.insertBefore(header, mainContent)

const maleCharacters = people.filter{person => person.gender === 'male'}
const femaleCharacters = people.filter {person => person.gender === 'female'}
const otherCharcters = people.filter{(person) => 
    if gender === 'hermaphrodite'
    || person.gender === 'n/a'
    || person.gender === 'none'    
}

function populationDOM(characters) {

    people.forEach(element) => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        if(index !== 16) {
            charImg.src = `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`
        }
    }

const charCaption = document.createElement('figcaption')
charCaption.textContent = `${element.name} at index ${index}`

charFigure.appendChild(charImg)
charFigure.appendChild(charCaption)
charFigure.appendChild(CharacterData)
})

function findLastNumber(url){
    let end = url,lastIndexOf('/')
    let start = end =2 
    console.log(url.charAt(start))
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}
cgetLastNumber('https://swapi.co/api/people/18/')