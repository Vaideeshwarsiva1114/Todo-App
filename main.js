const tasks = []

console.log("YEAAAADOFJOISDJFOSJD");
//sessionStorage.setItem("isLoggedIn", "false");

if(window.location.href === "index.html" || window.location.href === "signup.html" || window.location.href === "login.html") {
    sessionStorage.setItem("isLoggedIn", "false");
}
else if(window.location.href === "index2.html") {
    sessionStorage.setItem("isLoggedIn", "true");
    console.log("WORKS");
}

window.onload = function() {

    if(window.location.href === "index.html" || window.location.href === "signup.html" || window.location.href === "login.html") {
        sessionStorage.setItem("isLoggedIn", "false");
    }
    else if(window.location.href === "index2.html") {
        sessionStorage.setItem("isLoggedIn", "true");
    }


    //localStorage.setItem("logged", "false");

    //loggedIn = localStorage.getItem("logged");
}

function addTask() {

    if(document.getElementById("task").value.replace(/\s/g, "").length <= 0) {
        alert("Please enter a task before adding.");
    }

    else {
        task = document.getElementById("task").value;
        document.getElementById("none").innerHTML = "";
        console.log(task);
        

        tasks.push(task);
        console.log(tasks);
        document.getElementById("task").value = "";
    }
}

function deleteItem() {
    console.log("DELTE ITEM");
}