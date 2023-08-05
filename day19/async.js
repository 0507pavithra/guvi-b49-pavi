function operation(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const add = a+b ;
            resolve(add);

        },2000);
    })
}
async function addition(a,b){
    try{
        console.log("Perform addition");
        const add = await operation(a,b);
            console.log ("lets do addition:",add);
        }catch(err){
            console.log("OOPs",err);
        }
    }
    addition(23,45);
