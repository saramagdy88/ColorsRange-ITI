var red =document.getElementById('red')
var green =document.getElementById('green')
var blue =document.getElementById('blue')
var text =document.getElementById('text')


red.addEventListener('input' , function(){
    text.style.color=`rgb(${red.value},${green.value},${blue.value})`
})
green.addEventListener('input' , function(){
    text.style.color=`rgb(${red.value},${green.value},${blue.value})`
})

blue.addEventListener('input', function(){
    text.style.color=`rgb(${red.value},${green.value},${blue.value})`
})

