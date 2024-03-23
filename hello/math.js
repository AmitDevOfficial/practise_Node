function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}


//Multiple value can be export only one time--s
module.exports = {
   addFn: add,
   subFn: sub
};


// exports.add = (a,b) => a + b;
