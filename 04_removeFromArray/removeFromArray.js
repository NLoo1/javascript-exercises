const removeFromArray = function(ar, input) {
    // console.log(arguments);
    for(let i =1; i<arguments.length; i++){
        let index = ar.indexOf(arguments[i]);
        while(index >-1){
            if(index >-1) ar.splice(index, 1);
            index = ar.indexOf(input);
        }
    }
    // while(index > -1){
    //     if(index >-1) ar.splice(index, 1);
    //     index = ar.indexOf(input);
    //     // console.log(index);
    // }


    return ar;

};

// Do not edit below this line
module.exports = removeFromArray;
