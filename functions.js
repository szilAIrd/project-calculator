function operate(operator){
    switch(operator){
        case 'add':
            return add(a,b)
        break
        case 'subtract':
        break
        case 'multiply':
        break        
        case 'divide':
        break        
    }
}

function add(){}

function subtract(){}

function multiply(){}

function divide(){}

function clear(e){
    a = '';
    b = '';
    operator='';
    const display = document.getElementsByClassName('display')[0];
    return display.textContent='';
}

function display(e){
    const display = document.getElementsByClassName('display')[0];
    //  Check the status of the variables a,b and operator
    if  (a==''){
        // Check if the button pressed is a number or an operator: if a number use the value
        if (!isNaN(parseFloat(e.currentTarget.textContent)) && isFinite(e.currentTarget.textContent) ){
            a=e.currentTarget.textContent;
        }
        else if  (typeof e.currentTarget=== 'string'){
            alert("Select a number first!")
            return
        } 
    }
    //  Check if there is already an operator selected
    else if (operator===''){
        if (!isNaN(parseFloat(e.currentTarget.textContent)) && isFinite(e.currentTarget.textContent) ){
            alert("Select an operator!")
            return
            // a=e.currentTarget.textContent;
        }
        else if  (typeof e.currentTarget.textContent=== 'string'){
            operator = e.currentTarget.textContent;
        }
    }
    else if (b==''){
        // Check if the button pressed is a number or an operator: if a number use the value
        if (!isNaN(parseFloat(e.currentTarget.textContent)) && isFinite(e.currentTarget.textContent) ){
            b=e.currentTarget.textContent;
        }
        else if  (typeof e.currentTarget=== 'string'){
            alert("Select a number!")
            return 
        } 
    }
    // return display.textContent = e.currentTarget.textContent;
    return display.textContent = `${a} ${operator} ${b}`;

}

let a = '';
let b = '';
let operator = '';


const clearBtn = document.getElementById('clear')
clearBtn.addEventListener("click", clear)

const buttons = document.querySelectorAll('div.button');
buttons.forEach((button) => {button.addEventListener("click",display)})
// buttons.addEventListener("click",display);

// const button1 = document.getElementById("1")
// button1.addEventListener("click",display)