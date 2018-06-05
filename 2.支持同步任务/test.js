let Promise = require("./mypromise")
let fs = require("fs")

let promise = new Promise((resolve, reject) => {
    resolve("同步任务执行")
});

function f1(data) {
    console.log(data)
}

function errorLog(error) {
    console.log(error)
}
promise.then(f1, errorLog);