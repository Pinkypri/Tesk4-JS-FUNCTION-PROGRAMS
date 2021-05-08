//Get all the countries with population of less than 2lacs using filter function
let request=new XMLHttpRequest();
request.open('get',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = () =>{
    let data = JSON.parse(request.response);
    data.filter((element) =>{
       
       if( element.population <= 2000000 ){
       console.log(element.name);      
       }
       const p=document.createElement("p");
       p.innerHTML=element.name;
       document.querySelector("body").appendChild(p);
   });

    
     
        

    
  
};

