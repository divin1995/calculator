const currentOutput = document.querySelector(".currentOutput");
const previousOutput = document.querySelector(".previousOutput");
const equals = document.querySelector("#equals");
const number = document.querySelectorAll(".number, .operant");
const clearAll = document.querySelector("#clearAll");
const backspace = document.querySelector("#backspace");
const buttons = document.querySelectorAll(".button");

var includeOnceArray = ['+', '-', '*', '/', '.', '%'];
var operant = "+-*/.%";
number.forEach(button => {
    button.addEventListener('click', ()=> {
        let content = button.getAttribute('data-num');
        let currentTextOutput = currentOutput.textContent;
        let lastChar = currentTextOutput.substring(currentTextOutput.length -1);    
        let contentIsOperant = includeOnceArray.includes(content);

        if(contentIsOperant)
        {
            if(includeOnceArray.includes(lastChar))
            {
                if(lastChar === content)
                {
                    console.log("same as the last last operant");
                }
                else
                {
                    currentOutput.textContent = currentTextOutput.substring(0, currentTextOutput.length-1) + content;                
                }
            }
            else{
                currentOutput.textContent += content;
            }            
        }
        else{
            if(currentOutput.textContent == "0" && currentOutput.textContent.length == 1)
            {
                currentOutput.textContent = currentTextOutput.substring(0, currentTextOutput.length-1) + content;                
            }
            else
            {
                currentOutput.textContent += content;
            }            
        }
    })
});

clearAll.addEventListener('click', () => {
    currentOutput.textContent = "0";
    previousOutput.textContent = "";
})

equals.addEventListener('click', () => {
    let result = currentOutput.textContent;
    previousOutput.textContent = result +" =";
    currentOutput.textContent = eval(result);
    
})

backspace.addEventListener('click', () => {
    let output = currentOutput.textContent;
    currentOutput.textContent = output.substring(0, output.length-1);
})

window.addEventListener("keydown", (e) => {
    if(e.defaultPrevented)
    {
        return;
    }
    switch(e.key)
    {
        case "0":
            document.getElementById(e.key).click();            
            break;
        case "1":
            document.getElementById(e.key).click();
            break;
        case "2":
            document.getElementById(e.key).click();
            break;
        case "3":
            document.getElementById(e.key).click();
            break;
        case "4":
            document.getElementById(e.key).click();
            break;
        case "5":
            document.getElementById(e.key).click();
            break;
        case "6":
            document.getElementById(e.key).click();
            break;
        case "7":
            document.getElementById(e.key).click();
            break;
        case "8":
            document.getElementById(e.key).click();
            break;
        case "9":
            document.getElementById(e.key).click();
            break;
        case "/":
            document.getElementById(e.key).click();
            break;
        case "*":
            document.getElementById(e.key).click();
            break;
        case "-":
            document.getElementById(e.key).click();
            break;
        case "+":
            document.getElementById(e.key).click();
            break;
        case "%":
            document.getElementById(e.key).click();
            break;
        case "Enter":
            document.getElementById("equals").click();
            break;
        case "Backspace":
            document.getElementById("backspace").click();
            break;
        case "Escape":
            document.getElementById("clearAll").click();
            break;
    }
})
