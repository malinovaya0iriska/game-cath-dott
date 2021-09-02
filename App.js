const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const  timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
let time = 0
let score = 0
const board = document.querySelector('#board')

const colors= ['red','blue','green','purple','orange']
startBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    screens[0].classList.add('up')

})
timeList.addEventListener('click', event => {
    if (event.target.classList.contains ('time-btn')){
     time = parseInt(event.target.getAttribute('data-time'))
     screens[1].classList.add('up')
     startGame()
    }
})
board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
 } }) 

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}
function decreaseTime() {
    
    if (time===0){
        finishGame()
    }else  {
        let current = --time 
        if (current<10){
        current = `0${current}`
        }
        setTime(current)
    } 
   }

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}
function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML =`<h1> Счёт: <span class ="primary"> ${score}</span> </h1>`

}
function createRandomCircle() {
    const circle = document.createElement('div')
    circle.classList.add('circle')
    const size = getRandomNumber (10, 60)
    const {width, height} = board.getBoundingClientRect()
   
    const x = getRandomNumber (0, width-size)
    const y = getRandomNumber (0, height-size)
    
    const circleColor = getRandomColorCircle()
    const circleColor1 = getRandomColorCircle()

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`

circle.style.backgroundColor = circleColor
circle.style.boxShadow = '0px 0px 30px 0px  rgba(0, 255, 0, 0.67)'

    board.append(circle)
}
function getRandomNumber (min, max) {
  return Math.round(Math.random()*(max -min)+min)
}

function getRandomColorCircle(){
return colors[Math.floor(Math.random()*colors.length)]
}