//print the total population of countries in Asia continent using reduce and filter function
let request=new XMLHttpRequest();
request.open('get',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = () =>{
    
    let res=[];  
    let data = JSON.parse(request.response);
    
       data.filter((element) =>{
         if(element.region==="Asia"){
            res.push(element.population);       
            
         }
   
        popvalue=res.reduce((acc,e)=> acc+e,0);
        
    }); 
 console.log(popvalue);
};