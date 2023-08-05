function operation(a,b){
    try{
        if(b>a){
            throw new Error("B is greater than A!!!");
        }
        const result = a-b;
        console.log("error throw:",result);
    }
    catch(err){
        console.log("error occured:",err)
    }
}
operation(8,10);