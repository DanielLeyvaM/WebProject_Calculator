const display=document.getElementById('display');

function showInDisplay(input){
    display.innerHTML += input;
}

function deleteAll(){
    display.innerHTML ='';
}

function eraseLast(){
    if(display.innerHTML== 'Error' || display.innerHTML== 'undefined' ){
        deleteAll();
    }
    else{
        let input=display.innerHTML.slice(0, -1);
        display.innerHTML= input;
    }
}

function calculatePercent(){
    let number = Number(display.innerHTML) *0.01.toFixed(4);
    display.innerHTML= number;
}

function calculate(){
    try {
        display.innerHTML= eval(display.innerHTML).toFixed(2);
        
    } catch (error) {
        display.innerHTML= 'Error';
    }
}