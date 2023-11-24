import React from "react";
import { useNavigate } from "react-router-dom"
import background from "../TileBG_Cloud.png";
import angel from "../homecontent/AngelHugs.png"
import door from "../homecontent/brnweldoor.png"
import window from "../homecontent/cloudwindow.png"
import slippers from "../homecontent/SLIPPERS.png"
import quilt from "../frame79/39464fd22363761816c56cb4948b10c3.png"
import Welcome from "../components/gifcomponents/Welcome"
import LoveHome from "../components/gifcomponents/loveHome"
import { Div, Container, Row, Col} from "atomize";

const Home = () =>{

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleImageClick = (route) => {
      navigate(route); // Navigate to the specified route
    };
  

    return(
        <div style={{backgroundImage: `url(${background})`,  backgroundSize: 'cover', backgroundRepeat: 'repeat', height:'1400px'}}>
            <Container>
            <Row>
                <Col>
                <Div bgImg={angel} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" h="71px" w="171px"pos="absolute" top="155px" left="38px" onClick={() => handleImageClick("/gkys")}></Div>
                    <Div bgImg={door} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" h="122.48px" w="59.61px" pos="absolute" top="74.95px" left="93px"onClick={() => handleImageClick("/gkys")}></Div>
                    <Div bgImg={window} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" h="40px" w="40px" pos="absolute" top="86px" left="166px"onClick={() => handleImageClick("/gkys")}></Div>                    
                    <Div bgImg={slippers} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" h="22px" w="22px" pos="absolute" top="169px" left="70px" onClick={() => handleImageClick("/gkys")}></Div>
                </Col>
            </Row>
            </Container>
            <Container >
            <Div bgImg={quilt} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" pos="absolute" h="150.63px" w="220.07px" top="94.88px" left="327px" />
                    <Welcome />
                    <LoveHome />
            </Container>
        </div>
    )
}

export default Home;