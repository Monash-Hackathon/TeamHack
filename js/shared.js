const ACC_CLASS = "accounts"

let loginUser = "";

class Account{
    constructor(){
        this._username = [];
        this._password = [];
        this._email = [];
    }

    get accName(){return this._username}
    get accPass(){return this._password}
    get accEmail(){return this._email}

    newAccount(username, email, password){
        this._username[this._username.length] = username;
        this._password.push(password);
        this._email.push(email);
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
        this._email = [];
        for (let i=0; i<dataObject._username.length; i++){
            this._username.push(dataObject._username[i])
            this._password.push(dataObject._password[i])
            this._email.push(dataObject._email[i])
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

