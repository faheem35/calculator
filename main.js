// display result 

function displayContent(content){
   result.value+=content
}

// clear input  
function calcClear(){
   result.value= ""
}

// result
function calcOutput(){
  result.value=eval(result.value) 
  
    
}

//remove lastDigit
function removeLastDigit(){
   result.value=result.value.slice(0,-1)
}