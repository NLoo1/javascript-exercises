const sumAll = function() {
    try{
        if(arguments[0] > -1 && arguments[1] > -1
            && typeof arguments[0] == "number" && typeof arguments[1] == "number"){
            let min = Math.min(arguments[0], arguments[1]);
            let max = Math.max(arguments[0], arguments[1]);
    
            let sum = 0;
            for(let i = min; i <= max; i++){
                sum += i;
            }
            return sum
    
    } else return 'ERROR';
    }catch(ERROR){
        return 'ERROR';
    }
    
        
    }
    



// Do not edit below this line
module.exports = sumAll;
