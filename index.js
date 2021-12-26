const fs= require('fs');
fs.writeFile('demo1.txt', "this is a sample text" , function(err){
    if(err){
        console.log("Err");

    }else{
        console.log('successful');
    }
})

fs.writeFile('demo2.txt', "My Name Is Ashfin Rahman Nahin" , function(err){
    if(err){
        console.log(err);

    }else{
        console.log('successful');
    }
} )
fs.writeFile('demo3.txt', "Fuck CSE" , function(err){
    if(err){
        console.log("err");

    }else{
        console.log("successful");
    }
})

fs.appendFile('demo2.txt', "I live in Kafrul" , function(err){
    if(err){
        console.log('err');

    }else{
        console.log("Successful");
    }
})

fs.readFile('demo2.txt','utf-8', (err,demo) => {
    if(err){
        console.log("err");

    }else{
        console.log(demo);
    }
})

fs.rename('demo3.txt','demo2.txt',(err)=>{
    if(err){
        console.log("err");
    }else{
        console.log('successful');
    }
})

fs.unlink('demo1.txt', (err)=>{
    if(err) {
        console.log('err');
    }else{
        console.log('Sucessful');
    }
})

fs.exists('demo1.txt',(result)=>{
    if(result){
        console.log('Found');
    }else{
        console.log('Not Found');
    }
})