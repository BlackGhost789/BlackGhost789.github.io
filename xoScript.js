let numberClick = 0;
let O = []
let X = []
let gameEnd = false;
let winner = "";

function clicked(e){
    res = document.getElementById("re");
    numberClick = numberClick +1;
    if(numberClick%2 == 0){
        document.getElementById(e).innerHTML = "O";
        O.push(Number(e))
    }else{
        document.getElementById(e).innerHTML = "X";
        X.push(Number(e))
    }
    if (check(O)){
        winner = "O";
        gameEnd = true;
    }
    if (check(X)){
        winner = "X";
        gameEnd = true;
    }



    if (gameEnd || numberClick == 9){
        document.getElementById("tr").innerHTML = "hello";
        res.classList.add("result");
        if(winner == ""){
            res.innerHTML = "no winner";
        }else{
            res.innerHTML = "the player : "+winner+" wins the game";
        }
        
        document.getElementById("tr").classList.add("tryy");
    }
    

}

function check(a){
    a = a.join("");
    if(a.includes("1") && a.includes("4") && a.includes("7")){
        return true;
    }
    if(a.includes("2") && a.includes("5") && a.includes("8")){
        return true;
    }
    if(a.includes("3") && a.includes("6") && a.includes("9")){
        return true;
    }
    if(a.includes("1") && a.includes("2") && a.includes("3")){
        return true;
    }
    if(a.includes("4") && a.includes("5") && a.includes("6")){
        return true;
    }
    if(a.includes("7") && a.includes("8") && a.includes("9")){
        return true;
    }
    if(a.includes("1") && a.includes("5") && a.includes("9")){
        return true;
    }
    if(a.includes("3") && a.includes("5") && a.includes("7")){
        return true;
    }

}