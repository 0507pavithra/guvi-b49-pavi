let promiseObj=new Promise((resolve,reject)=>{
    console.log("A promise is an object");
    //resolve("Item is available");
    reject("item is unavailable")
});
console.log(promiseObj)

promiseObj.then(
(val)=> {
    console.log("Order placed",val);
},
(val)=> {
    console.log("sorry!!!!",val);
}
);


promiseObj
.then(
    (val)=> {
        console.log("Order placed",val);
    },
)
.catch(
    (val)=>{
        console.log("sorry!!!!",val)
    }
);