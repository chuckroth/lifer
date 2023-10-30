import React from "react";
import welcome from "../../frame79/fdec9c2a63c7ac94fbb94d1f17559176.gif"
import spider from "../../frame79/87e7b68705aaa91293f3e613ef491a09.gif"
import { Div} from "atomize";

const Welcome= () =>{

    return(
    <Div h="10%">
            <Div bgImg={welcome} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" w="262.04px" h="90.82px" pos="absolute" 
                left="276px" />
            <Div bgImg={spider} bgSize="contain" bgRepeat="no-repeat" bgPos="center center" w="69.98px" h="60.3px" pos="absolute" top="149.66px" left="478.02px" />
    </Div>


    )
}

export default Welcome;