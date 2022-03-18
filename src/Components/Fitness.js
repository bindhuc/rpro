import { useContext } from "react";
import { TourContext } from "./TourContext";
import { Link } from "react-router-dom";

const Hollywood = () =>{
    const {value2}=useContext(TourContext)
    const[Hollywood]=value2;
    console.log("Hollywood")

    return (
        <div className="tourism-cont">
        <div className='main-cont'>
        <div className='top-heading'>
           <div><h2>Hollywood</h2></div>
           <div className='toppost-border'></div>
           </div>
            {
            Hollywood.map( (Fitnessdetails,index) =>
              <div className='design'>
                <div >
               <Link to={`/Hollywood/${Fitnessdetails.id}`}><img className="images" src={Fitnessdetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h2>{Fitnessdetails.name}</h2>
              </div>
              
              <div>
              <p>{ Fitnessdetails.info}</p> 
              </div>
              <div>
                <h2>{Fitnessdetails.date}</h2>
              </div>
              </div>
              </div>
            
              )
            }
            
        </div>

          <div className='main-cont1'>
          <div className='top-heading'>
           <div><h2>Top-Posts</h2></div>
           <div className='toppost-border'></div>
           </div>
            {
            Hollywood.map( (Fitnessdetails,index) =>
              <div className='design1'>
                <div >
                <Link to={`/Hollywood/${Fitnessdetails.id}`}><img className="images1" src={Fitnessdetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h3>{Fitnessdetails.name}</h3>
              </div>
              
              <div>
                <h5>{Fitnessdetails.date}</h5>
              </div>
              </div>
              </div>
            
              )
            }
          </div>
      </div>
    )
}
export default Hollywood