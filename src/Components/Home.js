import React from "react";
import jijau from '../Components/jijau.jpg';
import shivray from '../Components/shivajiMaharaj.jpg';
import shambhuraje from '../Components/sambhajiMaharaj.jpg';
function Home(){
    return(
        <>
            <div className="text">
           <h1>Welcome to the Glorious History!!!</h1> 
           <h4>
            Here we are seeing about the Greatest People on the Earth.
           </h4>
           We are going to see about following Great Personalities-
           <ul>
            <li typeof="disk">
                    Rajmata Jijau
            </li>
            <li typeof="disk">
                    Chhatrapati Shivaji Maharaj
            </li>
            <li typeof="disk">
                    Chhatrapati Sambhaji Maharaj
            </li>
           </ul>
           </div>

            <div className="images mx-2">
            <img src={jijau} className="img" height= '200' width='300'></img>
            
           <img src={shivray} className="img" height= '200' width='300'></img>
           <img src={shambhuraje} className="img" height= '200' width='300'></img>
   
            </div>
           

        </>
    );
}

export default Home;