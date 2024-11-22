const display=document.getElementById("display")

function appendToDisplay(input){
    display.value+=input;
}

function clearDisplay(){
    display.value=""
}

function calculate(){
    let expression=display.value;

    try{
    display.value=eval(display.value)

    if(expression.includes("/0")){
        display.value="cannot divide by 0";
    
    }else{
        display.value=eval(expression);
    }
    }
    catch(error){
        display.value="Error"
    }
}