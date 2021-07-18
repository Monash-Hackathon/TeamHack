//Retrieving the student index and student queue into a variable
let resultKey = localStorage.getItem(ATTRI_RESULT);
let locatKey = localStorage.getItem(LOCATE_USER);

if (resultKey.length != 0){
    jobSearch(resultKey, locatKey, "full_time", "showData");
    localStorage.setItem(ATTRI_RESULT, "");
    localStorage.setItem(LOCATE_USER, "");
}