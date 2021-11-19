async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

get getAPIData(`https://pokeapi.co/api/v2/pokedemon/24`)
.then((data) => {
    console.log(data)
    populatePokeCards(data)
})

const pokeGrid = document.querySelector('.pokeGrid')

function populatePokeCards(singlePokemon) {
    const pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    const pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    const pokeFont = document.createElement('div')
    pokeFront.className = 'cardFace front'
    pokeFront.textContent = 'Front'
    const pokeBack= document.createElement('div')
    pokeBackclassName = 'cardFace back'
    pokeBack.textContent = 'Back'

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}