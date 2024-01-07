import React from "react";
import welcome from "../../frame79/fdec9c2a63c7ac94fbb94d1f17559176.gif"
import spider from "../../frame79/87e7b68705aaa91293f3e613ef491a09.gif"
import quilt from "../../frame79/quilt_fr.png"

import { Div} from "atomize";

const Welcome= () =>{

    return(
    <Div h="10%">
            <Div bgImg={welcome} 
                zIndex="1"
                bgSize="contain" 
                bgRepeat="no-repeat" 
                bgPos="center center" 
                w="262.04px" 
                h="90.82px" 
                pos="relative"
                left="20%" />
           <Div bgImg={spider} 
            zIndex="2"
            bgSize="contain" 
            bgRepeat="no-repeat" 
            bgPos="center center" 
            w="69.98px" 
            h="60.3px" 
            pos="relative" 
            top="-1px" 
            left="98%" />
            <Div bgImg={quilt} 
                zIndex="0"
                bgSize="contain" 
                bgRepeat="no-repeat" 
                bgPos="center center" 
                pos="relative" 
                h="100%"
                w="100%" 
                top="-94.88px" 
                left="30%"/> 
                
    </Div>


    )
}

export default Welcome;