//print the following details name,capital,flag using forEach function
let request=new XMLHttpRequest();
request.open('get',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = () =>{
    let data = JSON.parse(request.response);
      data.forEach((element) =>{
    console.log(element.name);
    console.log(element.capital); 
    console.log(element.flag);
    const image=document.createElement("img");
    image.setAttribute("style","width:150px; height:150px");
    image.setAttribute("src",element.flag);
    const h1=document.createElement("h1");
    const h2=document.createElement("h2");
    h2.innerHTML=element.capital;
    h1.innerHTML=element.name;
    document.querySelector("body").appendChild(h1);
    document.querySelector("body").appendChild(h2);
    document.querySelector("body").appendChild(image);  
       
       
            
        
    });
  
};