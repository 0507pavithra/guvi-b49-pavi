function dailyRoutine(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Daily = "read news";
            resolve(Daily);
        },2000);
    })
}
async function routine(){
    console.log("Take a shower");
    try{
        const Daily = await dailyRoutine();
        console.log("get dressed and ",Daily);
        console.log("eat breakfast")
    }catch(err){
        console.log("oops not eating breakfast",err);
    }
    console.log("Finally going out");
}
routine();