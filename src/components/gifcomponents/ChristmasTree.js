import React from "react";
import xm from "../../frame79/76e595e026547ad9551830b50dd39937.gif"
import devil from "../../frame79/f8cf1b67fe734ad21773e35a303d5d90.gif"
import { Div} from "atomize";

const ChristmasTree= () =>{

    return(
        <Div w="142px" h="143px">
            <Div 
                bgImg={xm} 
                bgSize="contain" 
                bgRepeat="no-repeat" 
                bgPos="center center" 
                h="128.382px" 
                w="128.382px"
                pos="absolute"
                top="168px"
                left="177.62px"/>
            <Div 
                bgImg={devil} 
                bgSize="contain" 
                bgRepeat="no-repeat" 
                bgPos="center center" 
                w="64.191px" 
                h="64.191px"
                pos="absolute"
                top="246.78px"
                left="164px"/>
        </Div>
    )
}

export default ChristmasTree;