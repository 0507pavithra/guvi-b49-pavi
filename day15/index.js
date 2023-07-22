const form = document.getElementById("form");
const tabel = document.getElementById("data");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    

const firstname = document.getElementById("Firstname").value;
const lastname = document.getElementById("Lastname").value;
const address = document.getElementById("address").value;
const pincode = document.getElementById("pincode").value;
const gender= document.querySelector('input[name="gender"]:checked').value;
const foodcheckboxes = document.querySelectorAll(
'input[name="food"]:checked'
);
const foodChioces = Array.from(foodcheckboxes).map(
(checkbox) => checkbox.value
);

if(foodChioces.length < 2) {
    alert("Please choose atleast two food items.");
    return;
}
const newRow =tabel.insertRow();
const firstnameCol= newRow.insertCell();
const lastnameCol= newRow.insertCell();
const addressCol= newRow.insertCell();
const pincodeCol= newRow.insertCell();
const genderCol= newRow.insertCell();
const foodCol= newRow.insertCell();

firstnameCol.textContent = firstname;
lastnameCol.textContent=lastname;
addressCol.textContent=address;
pincodeCol.textContent=pincode;
genderCol.textContent=gender;
foodCol.textContent=foodChioces.join(", ");

form.reset();
});



