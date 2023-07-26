function  testCase1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve("test case1 success");
        },2000);
    });
}
function  testCase2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve("test case2 success");
        },2000);
    });
}
function  testCase3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        //resolve("test case3 success");
        reject("test case3 failed");
    },2000);
    });
}

testCase1()
.then((val)=>{
    console.log(val);
    return testCase2();
})
.then((val)=>{
    console.log(val);
    return testCase3();
})
.then((val)=>{
    console.log(val);
    setTimeout(()=>{
    console.log("All test cases succeed");
    },3000);
})
.catch((val)=>{
    console.log("Error",err);
});