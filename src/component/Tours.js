import Cards from "./Cards";




function Tours({tours,removeTour}){
    return(
    <div className="container">
    <div>
        <h2 className="tittle">
           Plan With Love 
        </h2>
    </div>
    <div className="cards"> 
      {
tours.map((tour)=>
{
    return <Cards {...tour} removeTour={removeTour}></Cards>
})
      }
    </div>
    </div>
)}
export default Tours;