import React from "react";
import gg from "../../frame79/8e70aa30e701ec07d63284e12ad2b0fb.gif"
import bunny from "../../frame79/2226c97ed832745a603cbe6b7b0fd2c6.gif"
import lamb from "../../frame79/209f493d2b0682422b2164a15df33d49.gif"
import { Div} from "atomize";

const GreenGarden= () =>{

    return(
    <Div>
    <Div 
        bgImg={gg} 
        bgSize="contain" 
        bgRepeat="no-repeat" 
        bgPos="center center" 
        position="relative"
        w="350px"
        h="150px"
        top="400px"
        left="0px"
       // style={{ backgroundSize: '200% 200%' }}
        />
        <Div 
        bgImg={bunny} 
        bgSize="contain" 
        bgRepeat="no-repeat" 
        bgPos="center center" 
        w="54px"
        h="47.06px"
        position="fixed"
        top="100.25px"
        right="4142px"  />
         <Div 
        bgImg={lamb} 
        bgSize="contain" 
        bgRepeat="no-repeat" 
        bgPos="center center" 
        w="540px"
        h="47.06px"
        position="fixed"
        top="100.25px"
        right="4142px"  />
    </Div>
    )
}

export default GreenGarden;
