import "../App.css"
import React from "react";
import Welcome from "../components/gifcomponents/Welcome";
import ChristmasTree from "../components/gifcomponents/ChristmasTree";
import { useState, useEffect } from "react";
import { Container, Text, Div } from "atomize";
import door from "../homecontent/brnweldoor.png"
import slippers from "../homecontent/SLIPPERS.png"
import angel from "../homecontent/AngelHugs.png"
import widow from "../homecontent/cloudwindow.png"
import Home from "./home";

const SuicideWatch = () =>{

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
        <div className="Mobile-page">
        {!isWideScreen && 
        <Div>
        <Div bgImg={angel} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" h="71px" w="171px"pos="absolute" top="155px" left="40%"></Div>
        <Div bgImg={widow} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" h="40px" w="40px" pos="absolute" top="86px" left="166px"></Div>
        <Div bgImg={door} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" h="122.48px" w="59.61px" pos="absolute" top="94.95px" left="45%"></Div>
        <Div left="40%"top="60px" pos="absolute">Enter Lifer </Div>
        <Div bgImg={slippers} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" h="22px" w="22px" pos="absolute" top="169px" left="40%"></Div>
        <Container
                d="flex"
                flexDirection="column"
                align="start"
                justify="center"
                border="0px solid"
                borderColor="black"
                h="50%"
                w="33%"
                 >
            <div style={{ marginTop: '220px' }}>
            <ChristmasTree/> 
            </div>
        </Container>
        </Div>
        }
        </div>
    )

}

export default SuicideWatch;