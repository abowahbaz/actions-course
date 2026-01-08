function greet(name){
    return `Hello, ${name}!`;
}

module.exports = { greet };
// this is a dummy line to test git changes
if(require.main === module){
    console.log(greet("World"));
}