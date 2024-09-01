import { json } from "react-router-dom";

//1. Store jwt token in local stroage
export const doLogin = (data) =>{
    localStorage.setItem("data",JSON.stringify(data));
}

//2. Check jwt is stored or not in local storage
export const isLoggedIn = () =>{
    let data = localStorage.getItem("data");
    if(data != null){
        return true;
    }else{
        return false;
    }
}
//Get Login Username
 export const getLoginUsername = ()  =>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data")).username;
    }else {
        return false;
    }
 }
 //Get Login User token
 export const getToken = ()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data")).token;
    }else{
        return false;
    }
 }

 //Delete token form local storage
 export const doLogout = () => {
    localStorage.removeItem("data");
 }