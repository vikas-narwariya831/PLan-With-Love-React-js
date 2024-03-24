import { useState } from "react";

function Cards({id,image,info,price,name,removeTour}){

   const [readmore,setReadMore]=useState(false)
   const description= readmore?info:`${info.substring(0,200)}....`

   function readMoreHandler(){
   setReadMore(!readmore);
   }

   
return(
 
   <div className="card">
      <img src={image} className="image" alt=""/> 
      <div className="tout-info">
         <div className="tour-details">
         <h4 className="tour-price">{price}</h4>
         <h4 className="tour-name">{name}</h4>
      </div>
      <div className="description">{description}
      <span  className="reqad-more cursor-pointer" onClick={readMoreHandler}>{readmore?'...Showless':'...Readmore'}</span>
      </div>
      </div>
      
      <button className="btn-red" onClick={() => removeTour(id)}>Not Interested</button>
   </div> 
   
 
)}
export default Cards;