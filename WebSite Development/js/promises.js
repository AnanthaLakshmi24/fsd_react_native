function fun1(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(1)
        },1000)
    })
}
function fun2(value){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(value+1)
        },1000)
    })
}
function fun3(value){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(value+1)
        },1000)
    })
}
// fun1().then(function(){
//     console.log("Fun-1 completed")
//     fun2().then(function(){
//         console.log("Fun-2 completed")
//         fun3( ).then(function(){
//             console.log("Fun-3 completed")
//         })
//     })
// }) 
async function execute() {
    try{
        const res1 = await fun1()
        const res2 = await fun2(res1)
        const res3 = await fun3(res2)
        console.log(res3)
    }
    catch(err){
        console.log(err)
    }
}
execute();