setInterval(setClock, 1000)

const hourHand = document.querySelector("[data-hand-hour]")
const minteHand = document.querySelector("[data-hand-minute]")
const secondHand = document.querySelector("[data-hand-second]")

function setClock(){
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() /60
    const minutesRatio = (secondRatio + currentDate.getMinutes()) /60
    const hoursRatio = (minutesRatio + currentDate.getHours())   /12

    setRotation(secondHand, secondRatio)
    setRotation(minteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element , rotationRatio){
   element.style.setProperty('--rotation', rotationRatio *360)
}
setClock();