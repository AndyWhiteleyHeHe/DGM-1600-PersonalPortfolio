import { senators } from '../data/senators.js'
import { representatives } from '../data/senators.js'

const members = [...senators, ...representatives]

function SimplifiedMembers(chamberFilter) {
    const filteredArray = members.filter((member) =>
        chamberFilter ? member.short_title === chamberFilter : member,)
    
    return filteredArray.map((senator) => {
        let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            party: senator.party
            missedVotesPct: senator.missed_votes_pct,
            loyaltyPct: senator.votes_with_party_pct,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`
        }
    })
}

const senatorDiv = document.querySelector('.senators')
const loyaltyHeading = document.querySelector('.mostLoyal')
const seniorityHeading = document.querySelector('.seniority')

function populateSenatorDiv(simpleSenators) {
    simpleSenators.forEach(senator => {
        const senFigure = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')

        figImg.src = senator...
        figCaption.textContent = senator.name

        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorDiv.appendChild(senFigure)
    })
}

const filterSenators = (prop,value) == {
    return senators.filter(senator => senator(prop) === value)
}

console.log(filterSenators('party','R'))

const filterSenators = (prop,value) => SimplifiedSenators

const mostSeniorSenator = SimplifiedSenators().reduce((acc, senator) => 
acc.seniority > senator.seniority ? acc : senator,)

//seniorityHeading.textContent = `The oldest member of Congress is ${mostSeniorMember.name} who has served in Congress since ${mostSeniorMember.year}`

const mostLoyal = SimplifiedMembers().reduce((acc, senator) => {
    if (senator.loyaltyPct === 100) {
        acc.push(senator)
    }
    return acc
}, [])

const traitorList = document.createElement('ol')

const snake = mostLoyal.map((traitor) => {
    let listItem = document.createElement('li')
    listItem.textContent = coward.name
    cowardList.appendChild(listItem)
})

loyaltyHeading.appendChild(traitorList)

populateSenatorDiv(SimplifiedMembers())