import React from "react";
import olc from "../../frame79/90a0cf8a351b3ba470ef330ae6fdeb0d.gif"
import staw from "../../frame79/dbf8d1648e0c8d600600cceef6f40648.gif"
import { Div} from "atomize";

const starBGFunction = (numDivs, topSpace, leftSpace, srac, offSetMultipler )=>{
    const divs = [];
    for(let i = 0; i < numDivs; i++){
        const top = i * topSpace + offSetMultipler * 20
        for(let j = 0; j< numDivs; j++){
            const left = j * leftSpace + offSetMultipler * 20
            divs.push(
                <Div
                key={`${i}-${j}`}
                bgSize="contain"
                bgImg = {`${srac}`}
                bgRepeat="no-repeat"
                bgPos="center center"
                w="300px"
                h="35px"
                pos="fixed"
                top={`${top}px`}
                left={`${left}px`}
              >
              </Div>
            )
        }
    }

    return divs;
}
const OldLadyCar= () =>{
    const numDivs = 6
    const verticalDistance = 300;
    const horizontalDistance = 300;

    return(
       
          <Div>
            {starBGFunction(numDivs, verticalDistance, horizontalDistance, olc, 0)}
            {starBGFunction(4, 400, 400, staw, 5)}
          </Div>
    )
}

export default OldLadyCar;