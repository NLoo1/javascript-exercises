const repeatString = function(input, numLoops) {
    let output = "";
    if(numLoops <= -1) return 'ERROR';
    else{
        for(let i =0; i <numLoops; i++){
            output+=input;
            // console.log(output)
        }
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
