let Promise = require("./mypromise")
let fs = require("fs")

let promise = new Promise((resolve, reject) => {
    fs.readFile('../file/1.txt', "utf8", function(err, data) {
        err ? reject(err) : resolve(data)
    });
});

function f1(data) {
    console.log("f1:" + data)
}

function f2(data) {
    console.log("f2:" + data)
}

function errorLog(error) {
    console.log(error)
}

var p1 = promise
setTimeout(() => {
    p1.then(f1, errorLog)
}, 2000)