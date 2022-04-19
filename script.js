//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//유저가 맞추면, 맞췄습니다.
//랜덤번호가 작으면 Down!!!
//랜덤번호가 크면 Up!!
//Reset버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다쓰면 게임이 끝난다(더 이상 추측불가,버튼이 disable)
//유저가 1~100범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지않는다.


let computerNum = 0
let choiceNum = document.getElementById("choiceNum")
let checkNum = document.getElementById("checkNum")
let resetButton = document.getElementById("resetButton")
let chances = 5
let gameOver = false
let history = []

function pickNum() {
    computerNum = Math.floor(Math.random()*100) + 1
    console.log(computerNum)
}
pickNum()


checkNum.addEventListener("click",verifying)
resetButton.addEventListener("click",Reset)
choiceNum.addEventListener("focus",function(){
    choiceNum.value = ""
})


function verifying(){
    let inputNum = choiceNum.value;

    if(inputNum<1 || inputNum>100){
        alert("숫자가 범위 밖입니다 다시 선택하세요")
        return;
    }
    if (history.includes(inputNum)){
        alert("이미 선택한 숫자입니다 다시 선택하세요")
        return;
    }
    history.push(inputNum)
    chances --;
    console.log("남은기회는 ",chances)
    if(inputNum < computerNum){
        alert("Up!!")
    }else if (inputNum > computerNum){
        alert("Down!!")
    }else{
        alert("맞추셨습니다.")
        gameOver = true
    }
    if(chances < 1){
        checkNum.disabled = true;
    }
    if(gameOver == true){
        checkNum.disabled = true;
    }
}

function Reset(){
    pickNum()
    choiceNum.value=""
    checkNum.disabled = false;
    chances = 5;
    history = []
}