function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){ 
    return a/b;
}

function operate(op,a,b){
    let total = 0;
    if(op == "+"){
        total = add(a,b)
    }else if(op == "-"){
        total = subtract(a,b)
    }else if(op == "x"){
        total = multiply(a,b)
    }else if(op == "/"){
        total = divide(a,b)  
        // if(a == 0 || b == 0){
            
        //     console.log("buger me")
        //     display.textContent= calcNum;
        // }else{
        //     total = divide(a,b)            
        // }
        
    }
return total
}

function clear() {
    calcArray = ["","",""];
    calcNum = ""
    userOpp = ""
    display.textContent= calcNum;
    displayOp.textContent= userOpp ;
}

function sendToOperate(){
    calcArray[2]=calcNum;
    calcArray[0] = operate(calcArray[1],parseFloat(calcArray[0]),parseFloat(calcArray[2]))
    calcArray[0] = parseFloat((calcArray[0]).toFixed(6))
    calcNum = "";
    calcArray[1] = userOpp; 

}




let calcNum = "";
let operater = "";
let calcBtn = "";
let calcArray = ["","",""]
let userBtn = ""

const numberBtns = document.querySelectorAll(".btn");
const display = document.querySelector("#display-text")
const displayOp = document.querySelector("#display-operator")

numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', () =>{ 
    userBtn = numberBtn.value;
    
    if(userBtn == "clear"){
        clear()
    }else if(userBtn == "back"){
        if(calcNum.length>0){
            calcNum = calcNum.slice(0,(calcNum.length -1))
            
            display.textContent= calcNum;
        }
    }
    else if ( isNaN(userBtn) == false){
        if(calcNum.length <8){
            calcNum += userBtn
            display.textContent= calcNum;
        }
   

    }else if(userBtn == "."){
        if (calcNum.includes(".")==false){
            calcNum += userBtn
            display.textContent= calcNum;
            
    }

    }else if(['-', '+', 'x',"/","="].includes(userBtn)){
        displayOp.textContent = userBtn;
        userOpp = userBtn;
      
        if(calcArray[1]=="="){
            calcArray[1]= userBtn;

        }
        else if (calcArray[0] == "" & userOpp != "="){
            calcArray[0] = calcNum;
            calcArray[1] = userOpp
            calcNum = "";
           
         
        }else if (userOpp != "=" ){
            sendToOperate()
        
        }else{
            if(calcArray[0] == ""){
                display.textContent= calcNum
            }else{
            sendToOperate()
            }
            calcNum = ""
            
            
        }display.textContent= calcArray[0];
 

        


    }


                  




    })
})
   
     