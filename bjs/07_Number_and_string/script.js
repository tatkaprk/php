let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

document.querySelectorAll('#btn_num').forEach((button)=>{
    button.addEventListener('click', function (e) {
        inputWindow.value +=e.target.textContent;
    })
});

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt (inputWindow.value);
    operation = "sum";
    inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt (inputWindow.value);
    operation = "def";
    inputWindow.value = '';
})

document.getElementById('btn_multiply').addEventListener('click', function () {
    lastOperand = parseInt (inputWindow.value);
    operation = "multiply";
    inputWindow.value = '';
})

document.getElementById('btn_div').addEventListener('click', function () {
    lastOperand = parseInt (inputWindow.value);
    operation = "div";
    inputWindow.value = '';
})

document.getElementById('btn_sqr').addEventListener('click', function () {
    operandValue =  parseInt (inputWindow.value);
    lastOperand = isNaN(operandValue)?0:operandValue;
    operation = "sqr";
    inputWindow.value = '';
})



document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation==="sum"){
        const result = lastOperand + parseInt (inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation==="def"){
        const result = lastOperand - parseInt (inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation==="multiply"){
        const result = lastOperand * parseInt (inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation==="div"){
        const result = lastOperand / parseInt (inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation==="sqr"){
        let result;
        if (lastOperand == 0) {
            result = Math.sqrt(parseInt (inputWindow.value));
        }
        else {
            result = Math.sqrt(lastOperand);
        }
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

