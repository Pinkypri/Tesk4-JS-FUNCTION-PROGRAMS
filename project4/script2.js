//Get all the countries from Asia continent using filter function
let request=new XMLHttpRequest();
request.open('get',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = () =>{
    let data = JSON.parse(request.response);
      data.filter((element) =>{
        if( element.region== "Asia"){
        console.log(element.name);
        const h5=document.createElement("h5");
        h5.innerHTML=element.name;
        document.querySelector("body").appendChild(h5);      
        }
    });
    
  
};