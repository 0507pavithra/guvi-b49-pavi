function momCalling(callback){
    console.log("coming ma.....");
    setTimeout(()=>{
        console.log("what u want?");
        callback();
    },5000);
}
function againCalling(){
    console.log("varaane maaaa");

}
momCalling(againCalling);