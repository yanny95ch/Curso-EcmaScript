const anotherFunction = () => {
    return new Promise((resolve,reject) => {
        if (false){
            resolve('Se logro!!!...');
        }else {
            reject ('No se logro!!!...')
        }
    })
} 
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))