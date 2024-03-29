
function createAcc(){
    let userRef = document.getElementById("newUser");
    let passRef = document.getElementById("pass");
    let cpassRef = document.getElementById("cPass");
    let less = document.getElementById("lessPass");
    let invalid = document.getElementById("invalidPass");

    if (passRef.value.length < 8){
        less.innerHTML = `<i style = "color : red">Min. 8 Character</i>`    
        return;
    }
    else if (passRef.value != cpassRef.value){
        invalid.innerHTML = `<i style = "color : red">Password Does Not Match</i>`    
        return;
    }
    else if (acc.findUsername(userRef.value) != undefined){
        invalid.innerHTML = `<i style = "color : red">Username Exist</i>`   
    }
    else{
        acc.newAccount(userRef.value, passRef.value)

        updateData(ACC_CLASS, acc)

        window.location = "login.html";
    }
    
}

function login(){
    let userRef = document.getElementById("username");
    let passRef = document.getElementById("passw");    
    let invalidName = document.getElementById("invalidName");
    let invalidPass = document.getElementById("wrongPass");

    if (userRef.value == "" || passRef.value == ""){
        alert("Provide the username and password")
        return;
    }
    else if (passRef.value.length < 8){
        alert("Password Min 8. character")
        return;
    }
    let name = "";
    let valid = ""
    name = acc.findUsername(userRef.value);
    valid = acc.findAccount(userRef.value, passRef.value);

    if (name == undefined){
        invalidName.innerHTML = `<i style = "color : red">Username Does Not Exist</i>`    
    }
    else if (valid == undefined){
        invalidPass.innerHTML = `<i style = "color : red">Wrong Password</i>` 
    }
    else{
        acc.setProfile(userRef.value);
        updateData(ACC_CLASS, acc)
        window.location = "index.html";
    }
}

