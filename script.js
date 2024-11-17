function setUsers() {
    let userName = document.getElementById("fullName").value;
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;

    let userData = {
        name: userName, email: userEmail, password: userPassword
    }
    let users = JSON.parse(localStorage.getItem("users"));

    if (!userName || !userEmail || !userPassword) {
        alert("enter field first")
        return
    }

    if (users) {
        for (i = 0; i < users.length; i++) {
            if (userEmail == users[i].email) {
                alert("email already exist")
                document.getElementById("fullName").value = ""
                document.getElementById("email").value = ""
                document.getElementById("password").value = ""
                return
            }


        }

    }



    if (users) {
        users.push(userData)
        localStorage.setItem("users", JSON.stringify(users))
        document.getElementById("fullName").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
        window.location.href = "login.html"


    }
    else {
        localStorage.setItem("users", JSON.stringify([userData]))
        document.getElementById("fullName").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
        window.location.href = "login.html"

    }

console.log(userName)
   
}




function getUsers() {
    let userEmail = document.getElementById("loginEmail").value;
    let userPassword = document.getElementById("loginPassword").value;
    let userData = JSON.parse(localStorage.getItem("users"))
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].email == userEmail && userData[i].password == userPassword) {
            alert("success")

            window.location.href = "dashboard.html"
        }
        else if (userData == null) {
            alert("register first")

        }
        else {

            alert("email invalid")

        }
        break
    }
}







