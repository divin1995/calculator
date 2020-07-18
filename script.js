const currentOutput = document.querySelector(".currentOutput");
const previousOutput = document.querySelector(".previousOutput");
const equals = document.querySelector("#equals");
const number = document.querySelectorAll(".number, .operant");
const clearAll = document.querySelector("#clearAll");
const backspace = document.querySelector("#backspace");

var includeOnceArray = ['+', '-', '*', '/', '.', '%'];
var operantArray = ['+', '-', '*', '/', '%'];
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
                if(!(lastChar === content))
                {
                    currentOutput.textContent = currentTextOutput.substring(0, currentTextOutput.length-1) + content;
                }
            }
            else
            {
                currentOutput.textContent += content;
            }            
        }
        else
        {
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
    let lastChar = result.substring(result.length -1); 
    if(operantArray.includes(lastChar))
    {
        alert("Add a value to evaluate with!");
    }
    else{
        previousOutput.textContent = result +" =";
        currentOutput.textContent = eval(result);
    }    
})

backspace.addEventListener('click', () => {
    let output = currentOutput.textContent;
    if(output !== '0')
    {
        currentOutput.textContent = output.substring(0, output.length-1);
    }
})

window.addEventListener("keydown", (e) => {
    if(e.defaultPrevented)
    {
        return;
    }
    switch(e.key)
    {        
        case "Enter":
            document.getElementById("equals").click();
            document.getElementById("equals").style.backgroundColor = "#2196f3";   
            window.addEventListener("keyup", ()=>{
                document.getElementById("equals").style.backgroundColor = "rgba(0, 0, 0, 0.432)"; 
                })   
            break;
        case "Backspace":
            document.getElementById("backspace").click();
            document.getElementById("backspace").style.backgroundColor = "#2196f3";   
            window.addEventListener("keyup", ()=>{
                document.getElementById("backspace").style.backgroundColor = "rgba(0, 0, 0, 0.432)"; 
                })   
            break;
        case "Escape":
            document.getElementById("clearAll").click();
            document.getElementById("clearAll").style.backgroundColor = "#2196f3";   
            window.addEventListener("keyup", ()=>{
                document.getElementById("clearAll").style.backgroundColor = "rgba(0, 0, 0, 0.432)"; 
                })   
            break;
        default:
            document.getElementById(e.key).click();
            document.getElementById(e.key).style.backgroundColor = "#2196f3";   
            window.addEventListener("keyup", (e)=>{
                document.getElementById(e.key).style.backgroundColor = "rgba(0, 0, 0, 0.432)"; 
                })              
    }
})
