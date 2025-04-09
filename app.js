const form = document.getElementById('form')
const input = document.getElementById('input')
const submit = document.getElementById('submit')
const startGame = document.getElementById('startGame')
const output = document.getElementById('output')
const guessDisplay = document.getElementById('guessDisplay')
let computerNumber = Math.round(Math.random()*100);
let inputArray = []
console.log(computerNumber);


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let userNumber = parseFloat(input.value);
    if(userNumber >computerNumber){
        output.innerText = 'Too high!'
    }else if(userNumber<computerNumber){
        output.innerText ='Too low!'   
    }
    else{
       output.innerText = 'You got it! Congrats'
       disabledSubmitBtn()
    }
    inputArray.push(userNumber);
    guessDisplay.innerText = 'Your Guess Number:'+inputArray.join(',')

    if(inputArray.length>=10){
        output.innerText = 'You lost! The number was:' + computerNumber;
        disabledSubmitBtn()
    }
  
       input.value ='';
})
function disabledSubmitBtn(){
    submit.disabled = true;
    input.disabled = true;
    startGame.disabled = false;
}
function enabledStartGameBtn(){
    startGame.disabled = false;
}
startGame.addEventListener('click',()=>{
    submit.disabled = false;
    input.disabled = false;
    startGame.disabled = true;
    guessDisplay.innerText = ''
    computerNumber = Math.round(Math.random()*100)

})

