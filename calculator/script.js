var arr = [];
var nums = document.getElementsByClassName("numero");
var simbolos = document.getElementsByClassName("sinais");
var igual = document.getElementById("igual");
var total = document.getElementById("current-opera");
var CE = document.getElementById("cleartudo");
var C = document.getElementById("clear");
var opAnterior = document.getElementById("previous-opera");
var DEL = document.getElementById("delet");
for (var i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', function() { 
        var clicado = this;
        ultimoIndex = arr.length -1;
        if(!arr[ultimoIndex] || arr[ultimoIndex] == "*" || arr[ultimoIndex] == "/" || arr[ultimoIndex] == "+" || arr[ultimoIndex] == "-" )
        arr.push(clicado.innerHTML)
        else{
            arr[ultimoIndex] += clicado.innerHTML;
        }
        total.innerHTML = arr.join(" ");
    });
}

for(var i = 0; i < simbolos.length; i++){

    simbolos[i].addEventListener('click', function(){   
        var clickado = this;
        var ultimoIndex = arr.length - 1;
        if (arr.length > 0 && (arr[ultimoIndex] == "*" || arr[ultimoIndex] == "+" || arr[ultimoIndex] == "-" || arr[ultimoIndex] == "/")) {
            arr[ultimoIndex] = clickado.innerHTML;
        } else {
            arr.push(clickado.innerHTML);
        }
        total.innerHTML = arr.join(" ");

    });
}

function containsString(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            return true;
        }
    }
    return false;
}

igual.addEventListener('click', function(e){
    e.preventDefault();
    opAnterior.innerHTML = `${arr.join(" ")} =`
    while(containsString(arr)){
    if(arr.includes("/") || arr.includes("*")){
        
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === "*"){
                arr[i-1] = Number(arr[i-1]) * Number(arr[i+1])
                arr.splice(i,2);
                i--;
            }
            if(arr[i] === "/"){
                if(arr[i+1] != "0" || arr[i+ 1] != 0){
                    arr[i-1] = Number(arr[i-1]) / Number(arr[i+1])
                    arr.splice(i,2);
                    i--;
                }
                else{
                    alert("impossivel dividir por 0")
                    arr = []
                    total.innerHTML = 0
                }
            }
        }
 }
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === "+"){
                arr[i-1] = Number(arr[i-1]) + Number(arr[i+1]);
                arr.splice(i,2);
                i--;
            }
            if(arr[i] === "-"){
                arr[i-1] = Number(arr[i-1]) - Number(arr[i+1]);
                arr.splice(i,2);
                i--;
            }
        }
        arr.filter(function(value) {
            return value !== '';
        });
    }  
    console.log(arr);
    total.innerHTML = (arr);
     ;
    arr = [];
})

CE.addEventListener('click', function(){
arr = [];
total.innerHTML = 0;
})

C.addEventListener('click', function(){
    ultimoIndex = arr.length -1;
    arr.splice(ultimoIndex, 1);
    total.innerHTML = arr.join(" ");
})

DEL.addEventListener('click', function(){
    arr = [];
    total.innerHTML = 0;
    opAnterior.innerHTML = 0;
})