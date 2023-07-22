function Calculator(operation){
    //const num1=Number(document.getElementById("num1").value);
    //const num2=Number(document.getElementById("num2").value);
    const num1=Number(prompt("show the num1 prompt:"));
    const num2=Number(prompt("show the num2 prompt:"));
    let result;

    switch(operation){
        case "add":
            result=num1 + num2;
            break;
        case "sub":
            result=num1 - num2;
            break;
        case "mul":
            result=num1 * num2;
            break;
        case "div":
            result=num1 / num2;
            break;
        default:
            result="Invalid";
    }
    const msg = confirm("Are you sure to show the result?");
    if(msg){
        document.getElementById("result").innerText = result;
    }else{
        document.getElementById("result").innerText = "Not found";
    }
    const addElem=document.getElementById("add");
    addElem.addEventListener("click",function(){
        
    })
 //document.getElementById("result").innerText = result;
 setInterval(()=>{
    alert("SUCCESS")
},5000);
}