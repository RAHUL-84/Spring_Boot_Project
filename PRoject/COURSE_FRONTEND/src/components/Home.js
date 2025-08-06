import {useEffect } from "react";
import React from "react";
import homee from '../images/3.jpg'
import Menuss from "./MenuHome";

const Home = () => {
    useEffect(()=>{
        document.title="Home || RAHUL";
    })
   
  return <div>
        <jumbotron className="text-center">
            <img src={homee} alt="" style={{
            height: 500
          }}
          width="100%"
          
          />
          
      <p>This Application is developed using Spring Boot(BackEnd) and React JS(FrontEnd)</p>
         <Menuss/>
        </jumbotron>
       
          
    </div>;
};
export default Home;


