function promiseCode1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
      resolve("Producingcode1");
        },1000);
    })
}
function promiseCode2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
      resolve("Producingcode2");
        },1000);
    })
}
function promiseCode3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
      resolve("Producingcode3");
        },1000);
    })
}
function promiseCode4(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
      resolve("Producingcode4");
        },1000);
    })
}
function promiseCode5(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
      resolve("Producingcode5");
        },1000);
    })
}

Promise.all([promiseCode1(),promiseCode2(),promiseCode3(),promiseCode4(),promiseCode5()])
.then((val)=>{
    console.log(val);
    setTimeout(()=>{
    console.log("consumerCode Succeed");
    },3000);
})
.catch((val)=>{
    console.log("Error",err);
});
