const ACC_CLASS = "accounts"

let loginUser = "";

class Account{
    constructor(){
        this._username = [];
        this._password = [];
        this._profile = ""
    }

    get accName(){return this._username}
    get accPass(){return this._password}
    get profile(){return this._profile}

    setProfile(username){
        this._profile = username;
    }

    newAccount(username, password){
        this._username.push(username);
        this._password.push(password);
    }

    findAccount(username, password){
        for (let i in this._username){
            if (username == this._username[i] && password == this._password[i]){
                return username;
            }
        }
    }

    findUsername(username){
        for (let i in this._username){
            if (username == this._username[i]){
                return username;
            }
        }
    }

    fromData(dataObject){

        this._username = [];        
        this._password = [];
this._profile = dataObject._profile;
        for (let i=0; i<dataObject._username.length; i++){
            this._username.push(dataObject._username[i])
            this._password.push(dataObject._password[i])

        }
    }

}

function checkData(key)
{
    //If the data got from the local storage at the provided key is not null (empty), return true. Otherwise, return false
    if (localStorage.getItem(key) !== null )
    {
        return true;
    }
    else
    {
        return false;
    }

}


function updateData(key, data)
{
    let theData = JSON.stringify(data);
    localStorage.setItem(key, theData);
}


function retrieveData (key)
{
    //Retrieving the data from the local storage at the provided key
    let result = localStorage.getItem(key);
    try
    {
        //Try to parse the data back into an object
        result = JSON.parse(result);
    }
    catch
    {
        //Catch error if its not an object
        console.log("Its not an object");
    }
    finally
    {
        return result;
    }
}



let acc = new Account();

if (checkData(ACC_CLASS) == true)
{
    let dataRetrieved = retrieveData(ACC_CLASS);  
    acc.fromData(dataRetrieved);


}
//If there is no data in the local storage at the APP_DATA_KEY, create two subqueues into consultSession and update the APP_DATA_KEY wiht the consultSession
else if (checkData(ACC_CLASS) == false)
{
    updateData(ACC_CLASS, acc);
}



    if (acc.profile.length > 0 ){
        let loginRef = document.getElementById("loginName");    
        loginRef.innerHTML = ` <i class="far fa-address-card"></i><a class="nav-link" style="color:black; font-size: 3vh;border: solid;border-radius: 15px;" id = "loginName">${acc.profile}</a>`;    
    }
    else{   
        let loginRef = document.getElementById("loginName");    
        loginRef.innerHTML = `<a class="nav-link" href="login.html" style="color:white; font-size: 3vh;" id = "loginName">Login</a>`;
    }
