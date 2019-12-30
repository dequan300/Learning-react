import React from 'react'

function Heading(){
  
    let date = new Date(2019,1,1,1)
   let hour = date.getHours()
   let greeting ;
   let styleObject ={
     color:''
   }
   if(hour > 17){
     greeting="good morning"
     styleObject.color='red'
   }else if(hour <11){
     greeting="fuck off"
     styleObject.color='blue'
   
   }else{
     greeting="hello world"
   }

 return <h1 style={styleObject} >{greeting}
 

 </h1>;
 

};

export default Heading