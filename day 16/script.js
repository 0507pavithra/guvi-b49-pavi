var timer;

function countDown(i, callback) {
    //callback = callback || function(){};
    timer = setInterval(function() {
        document.getElementById("displayDiv").innerHTML = "Number: " + i;
        i-- || (clearInterval(timer), callback());
    }, 1000);
}


$("#go").on("click", function(){
    countDown(5, function(){
        alert("Countdown done!")
    });
});

$("#stop").click(function(){
    clearInterval(timer);
});
