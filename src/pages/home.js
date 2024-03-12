import React from "react";
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import background from "../TileBG_Cloud.png";
import angel from "../homecontent/AngelHugs.png"
import door from "../homecontent/brnweldoor.png"
import window from "../homecontent/cloudwindow.png"
import slippers from "../homecontent/SLIPPERS.png"
//import quilt from "../frame79/quilt_fr.png"
import Welcome from "../components/gifcomponents/Welcome"
import LoveHome from "../components/gifcomponents/loveHome"
import { Div, Container, Row, Col, Text} from "atomize";
import ChristmasTree from "../components/gifcomponents/ChristmasTree";
import OldLadyCar from "../components/gifcomponents/OldLadyCar"

const Home = () =>{

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleImageClick = (route) => {
      navigate(route); // Navigate to the specified route
    };

    return(
        <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'repeat', height:'1400px'}}>
            <Container>
            <OldLadyCar />
            <Row>
                <Col>
                
                <Div bgImg={angel} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" h="71px" w="171px"pos="absolute" top="155px" left="38px" onClick={() => handleImageClick("/gkys")}></Div>
                    <Div bgImg={door} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" h="122.48px" w="59.61px" pos="absolute" top="74.95px" left="93px"onClick={() => handleImageClick("/gkys")}></Div>
                    <Div bgImg={window} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" h="40px" w="40px" pos="absolute" top="86px" left="166px"onClick={() => handleImageClick("/gkys")}></Div>                    
                    <Div bgImg={slippers} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" h="22px" w="22px" pos="absolute" top="169px" left="70px" onClick={() => handleImageClick("/gkys")}></Div>
                    <Div left="80px"top="40px" pos="absolute">Enter Lifer
                    </Div>
                </Col>
            </Row>
            </Container>
            <Container 
                d="flex"
                flexDirection="column"
                align="start"
                justify="center"
                border="0px solid"
                borderColor="black"
                h="100%"
                w="33%"
                >
                    <Welcome> <Link to="/gkys" className="navtag"></Link> </Welcome>
                <Container 
                d="flex"
                justify="center"
                align="center"
                border="0px solid"
                borderColor="black"
                pos="absolute"
                top="45%"
                left="50%"
                transform="translate(-50%, -50%)"
                h="10%"
                w="10%"
                >
                
                    <LoveHome />
                </Container>
                <Container 
                d="flex"
                justify="center"
                align="center"
                border="0px solid"
                borderColor="red"
                pos="absolute"
                top="65%"
                left="50%"
                transform="translate(-50%, -50%)"
                h="10%"
                w="10%"
                >
                
                    <ChristmasTree />
                </Container>
            </Container>
        </div>
    )
}

export default Home;