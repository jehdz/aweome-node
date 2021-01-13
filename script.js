const fs = require('fs');
//fs stands for sile system

//this first parameter is the path to the file
//readFIle is asynchronous
fs.readFile('./hello.txt', (err, data) => {
    if(err) {
        console.log('There was an error')
    }
    console.log('async read: ', data.toString('utf8'));; //we need to toString it otherwise we'll get the text in UTF-8 encoding format

})

//readFIleSyn is synchronous
const file = fs.readFileSync('./hello.txt');

console.log('sync read: ', file.toString())

//APPEND
//this adds to the file
fs.appendFile(',/hello.txt', ' This is so cool!', err => {
    if(err){
        console.log(err)
    }
})


//WRITE
//creates a new text file
fs.writeFile('bye.txt', 'sad to see you go', err => {
    if(err){
        console.log(err)
    }
})

// DELETE
//this is how we remove text files
fs.unlink('./bye.txt', err => {
    if(err){
        console.log(err)
    }
    console.log('the textfile was deleted')
})