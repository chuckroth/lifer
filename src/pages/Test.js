import React from "react";
import background from "../TileBG_Cloud.png";
import quilt from "../frame79/39464fd22363761816c56cb4948b10c3.png"
import Welcome from "../components/gifcomponents/Welcome"
import LoveHome from "../components/gifcomponents/loveHome"
import { Div, Container} from "atomize";

const Test = () =>{

    return(
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'repeat', height: '1400px'}}>
            <Container>

                    
                    <Div bgImg={quilt} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" pos="absolute" h="150.63px" w="220.07px" top="94.88px" left="327px" />
                    <Welcome />
                    <LoveHome />
                   
            </Container>
        </div>
    )
}

export default Test;