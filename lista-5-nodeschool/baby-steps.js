var index = 0;


for(var i =2; i < process.argv.length; i++){
    index += Number(process.argv[i]);
    
}

console.log(index);
