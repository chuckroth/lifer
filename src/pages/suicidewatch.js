import "../App.css"
import React from "react";
import ChristmasTree from "../components/gifcomponents/ChristmasTree";
import { useState, useEffect} from "react";
import { useNavigate, Link} from "react-router-dom"
import { Container, Div } from "atomize";
import LoveHome from "../components/gifcomponents/loveHome";
import welcome from "../frame79/fdec9c2a63c7ac94fbb94d1f17559176.gif"
import spider from "../frame79/87e7b68705aaa91293f3e613ef491a09.gif"
import quilt from "../frame79/quilt_fr.png"

const SuicideWatch = () =>{

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 600);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleImageClick = (route) => {
      navigate(route); // Navigate to the specified route
    };
    

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
          <Link to="/gkys">
        <Container
  
                d="flex"
                flexDirection="column"
                align="center" // Centering content vertically
                justify="center"
                border="0px solid"
                borderColor="black"
                h="50vh" // Adjusted to 50vh for better centering
                w="80%" // Adjusted width for better centering
                m="auto" // Added margin auto for horizontal centering
                 >
                  
            <div style={{ marginTop: '220px'}}>

            <Div bgImg={welcome} 
                zIndex="1"
                bgSize="contain" 
                bgRepeat="no-repeat" 
                bgPos="center center" 
                w="230.04px" 
                h="90.82px" 
                pos="relative"
                left="15%" />
           <Div bgImg={spider} 
            zIndex="2"
            bgSize="contain" 
            bgRepeat="no-repeat" 
            bgPos="center center" 
            w="69.98px" 
            h="60.3px" 
            pos="relative" 
            top="-13px" 
            left="70%" />
            <Div bgImg={quilt} 
                zIndex="0"
                bgSize="contain" 
                bgRepeat="no-repeat" 
                bgPos="center center" 
                pos="relative" 
                h="10vh" 
                w="100%" 
                top="-54.88px" 
                left="5%"/> 
                <Div left="30%"bottom="1vh" pos="relative" onClick={() => handleImageClick("/gkys")}> Click to Enter Lifer
                    </Div>
            <LoveHome />
            
            <div className="mobileChristmas">
            <ChristmasTree />
            </div>
            </div>
        </Container>
        </Link>
        </Div>
        }
        
        </div>
    )

}

export default SuicideWatch;
