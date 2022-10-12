const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')

const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const pauseBtn = document.querySelector('.pause')

let hour = 00,
minute = 00,
second = 00,
millisecond = 00,
interval

startBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    millisecond = 00
    second = 00
    minute = 00
    hour = 00
    hourElement.innerText = "00"
    minuteElement.innerText = "00"
    secondElement.innerText = "00"
    millisecondElement.innerText = "00"
})

pauseBtn.addEventListener('click', () => {
    clearInterval(interval)
})

function startTimer() {
millisecond++
if(millisecond < 9) {
    millisecondElement.innerText = "0" + millisecond
}
if(millisecond > 9) {
    millisecondElement.innerText = millisecond
}
if(millisecond > 99) {
    second++
    secondElement.innerText = "0" + second
    millisecond = 00
    millisecondElement.innerText = "0" + millisecond
}
if(second < 9) {
    secondElement.innerText = "0" + second
}
if(second > 9) {
    secondElement.innerText = second
}
if(second > 59) {
    minute++
    minuteElement.innerText = "0" + minute
    second = 00
    secondElement.innerText = "0" + second
}
if(minute < 9) {
    minuteElement.innerText = "0" + minute
}
if(minute > 9) {
    minuteElement.innerText = minute
}
if(minute > 59) {
    hour++
    hourElement.innerText = "0" + hour
    minute = 00
    minuteElement.innerText = "0" + minute
}
if(hour < 9) {
    hourElement.innerText = "0" + hour
}
if(hour > 9) {
    hourElement.innerText = hour
}
}