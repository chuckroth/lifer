import "../App.css"
import React from "react";
import Welcome from "../components/gifcomponents/Welcome";
import ChristmasTree from "../components/gifcomponents/ChristmasTree";
import { useState, useEffect } from "react";
import { Container } from "atomize";



const About = () =>{

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    

    return(
        <div className="About-page">
            <div className="About-intro">
            <p>"Born in Kansas. All items handmade in Los Angeles, CA. No refunds or exchanges accepted at this time. Please see the customs product page for all info about customs:)"
</p>
            </div>
        {isWideScreen && <Welcome/>  && !isWideScreen}
        {!isWideScreen && isWideScreen && 
        <Container
                d="flex"
                flexDirection="column"
                align="start"
                justify="center"
                border="0px solid"
                borderColor="black"
                h="100%"
                w="33%">
           
            <ChristmasTree/> 
        </Container>
        }

        </div>
    )

}

export default About;