import React from "react";
import { useEffect } from "react";
import { Card,CardBody,CardSubtitle,CardText } from "reactstrap";

const Contact = () => {
    useEffect(()=>{
        document.title="Contact || RAHUL";
    })
  return <div>
        <jumbotron className="text-center">  
        <Card  className="text-center"  style={{
    width: '27 rem', marginLeft:5
  }}>          
  <img
    alt="Sample"
    src="https://picsum.photos/300/130"
  />
            <CardBody color="primary">
                
                <CardSubtitle tag={"h5"} >"I appreciate your kind visit" Thank you"..</CardSubtitle><></>
                <CardSubtitle tag={"h3"} >RAHUL</CardSubtitle>
                <CardText>Email: rahul000@gmail.com </CardText>
                
            </CardBody>
        </Card>     
        </jumbotron>
    </div>;
};
export default Contact;