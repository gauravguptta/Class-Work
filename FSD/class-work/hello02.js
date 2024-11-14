let promise = function getpromise(){
    return new promise(resolve,reject) => {
        setTimeout(() =>{
            console.log("Roll.No.is",num);
            resolve
        })
    }
}