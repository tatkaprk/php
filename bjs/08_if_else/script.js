
let minValue,maxValue,answerNumber,orderNumber,gameRun;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
gameStart();

function getPhrase(){
    let phraseRandom = Math.round( Math.random()*2);
    switch(phraseRandom){
        case 0:
            phrase = `Хитрый жук, вот твое число ${answerNumber }!`; break
        case 1:
            phrase = `Как тебе вариантик?! ${answerNumber }`; break
        case 2:
            phrase = `Выкуси ${answerNumber }!`; break
    }
    return phrase;
}

function getWinPhrase(){
    let phraseRandom = Math.round( Math.random()*2);
    switch(phraseRandom){
        case 0:
            phrase = `Я всегда угадываю\n\u{1F60E}`; break
        case 1:
            phrase = `Выкуси \n\u{1F60E}`; break
        case 2:
            phrase = `Я волшебник`; break
    }
    return phrase;
}

function gameStart(){
    (minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0) < -999 ? minValue=-999 : minValue=minValue;
    (maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100) > 999 ? maxValue=999 : maxValue=maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    answerField.innerText = getPhrase();
}

document.getElementById('btnRetry').addEventListener('click', function () {
    gameStart();
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getPhrase();
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    console.log(minValue);
    console.log(maxValue);
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getPhrase();
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

