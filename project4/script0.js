//print the total population of countries using reduce function
 request=new XMLHttpRequest();
request.open('get',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = () =>{
    
    let res=[];  
    let data = JSON.parse(request.response);
       data.forEach((element) =>{
       res.push(element.population);
       popvalue=res.reduce((acc,e)=> acc+e,0);
        
    }); 
 console.log(popvalue);
 const h5=document.createElement("h5");
        h5.innerHTML=element.popvalue;
        document.querySelector("body").appendChild(h5);   
};
