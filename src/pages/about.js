import "../App.css"
import React from "react";
import Welcome from "../components/gifcomponents/Welcome";
import { useState, useEffect, useContext } from "react";
import { Container } from "atomize";
import { ShopContext } from "../context/shopContext";



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
    
  const {aboutPageDescription, fetchAboutPage} = useContext(ShopContext)

  useEffect(()=>{
    fetchAboutPage();
  }, [fetchAboutPage])

    return(
        <div className="About-page">
            <div className="About-intro">
            <p>{aboutPageDescription || 'Loading...'}</p>
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
                h="200%"
                w="33%">
           

        </Container>
        }

        </div>
    )

}

export default About;