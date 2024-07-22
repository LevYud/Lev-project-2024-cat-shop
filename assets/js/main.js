console.log("boop");
// const xhr = new XMLHttpRequest();
const xhr =new XMLHttpRequest();
const manu= document.getElementById('manu');

xhr.onload=function(){
    console.log("ihibibivbu")
    if(this.status===200){
        manu.innerHTML=xml.responceText;
    }
    else{
        console.warn("bla bla");
    };

    xhr.open('get','../components/manu.html');
    xhr.send();
}