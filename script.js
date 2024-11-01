function setUsers () {
let userName = document.getElementById("fullName").value;
let userEmail = document.getElementById("email").value;
let userPassword = document.getElementById("password").value;

let userData = {
name: userName, email: userEmail, password: userPassword
}
let users =  JSON.parse(localStorage.getItem("users"));

if(users){
users.push(userData)
localStorage.setItem("users", JSON.stringify(users))
window.location.href="login.html"

}
else{
localStorage.setItem("users",JSON.stringify([userData]))
window.location.href="login.html"
}
console.log(userData)
}
function getUsers(){



}
function getUsers () {
let userEmail =document.getElementById("loginEmail").value;
let userPassword =document.getElementById("loginPassword").value;
let userData = JSON.parse(localStorage.getItem("users"))
for (let i=0; i<userData.length; i++){
if(userData[i].email== userEmail &&userData[i].password== userPassword ){
 alert("success")

window.location.href ="dashboard.html"
}
else if(userData==null){
alert("register first")

}
 else{

 alert ("email invalid")

 }
 break
}
}







