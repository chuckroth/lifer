import {React, useEffect, useContext, useState} from "react";
import { useParams } from "react-router-dom";
import  { ShopContext } from "../context/shopContext"
import { Text, Div, Button, Row, Col, Container, ThemeProvider } from "atomize";
import "../App.css"
import buttongif from "../footerstuff/productstuff/d12dda19dc22d570c9188e1dea232907.gif"
import bfly from "../footerstuff/productstuff/91af2b3c1a03682a6eef7dc26c235454.gif"

const Product = () =>{

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
    let { id } = useParams()
    const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext)

    useEffect(()=>{
        
        let newId = "gid://shopify/Product/" +id
        fetchProductWithId(newId)
        return()=>{

        }
    }, [fetchProductWithId, id])

    const theme ={
        colors: {
            geen: "#33FF00"
        },
        fontFamily: {
            pointy: "Palatino"
        }
    }

    if(!product.title) return( <p>im empty</p>)
    return(
        <ThemeProvider theme={theme}>
        <Container pos="fixed" right="0px" w="20%" top= "10%" >
        <Div bgImg={bfly} bgRepeat="no-repeat" bgSize="contain" bgPos="right center" h="3rem"></Div>

        </Container>
       { isWideScreen && <Container  pos="fixed"
                    top="5%"
                    p="0"
                    d="0"
                    >
            <Row m={{ b: "2rem" }} p="0rem">

                <Col size={{xs:12, md: 6, lg: 4}} >
                    <br></br>
                    <Text fontFamily="pointy" textSize="title" >{product.title}</Text>
                    <Text fontFamily="pointy" textColor="black" >${product.variants[0].price.amount}</Text>
                    <Text fontFamily="pointy" textColor="black"  left="0px">{product.description}</Text>

                    <Container display="flex-start" justify="left" pos="relative" >
                    <Div bgImg={buttongif} bgSize="contain" bgRepeat="no-repeat" bgPos="left left" h="2.5rem"/>
                    <Button onClick={()=> addItemToCheckout(product.variants[0].id, 1)} bg="geen" fontFamily="pointy" rounded="0" textColor="black" textSize="subheader">add to cart</Button>
                    </Container>
                    
                </Col>
            </Row>
        </Container>}
        <Container left="0" w={isWideScreen? "50%": "100%" }>
            <Row>
                <Text fontFamily="pointy" textSize="title" >{product.title}</Text>
            </Row>
            <Row>
                <Text fontFamily="pointy" textColor="black" >${product.variants[0].price.amount}0</Text>
            </Row>
            

            <Row>
            <Container display="flex-start" justify="left" pos="relative" >
                    <Div bgImg={buttongif} bgSize="contain" bgRepeat="no-repeat" bgPos="left left" h="2.5rem"/>
                    <Button onClick={()=> addItemToCheckout(product.variants[0].id, 1)} bg="geen" fontFamily="pointy" rounded="0" textColor="black" textSize="subheader">add to cart</Button>
                    </Container>
            </Row>
            <Row>
            <Col align="center center" display="flex" >
                    {product.images.map(image=>(
                                           <Div p={isWideScreen? "3rem": "0rem"} >
                                             <Div bgImg={image.src} bgRepeat="no-repeat" bgSize="contain" bgPos="top center" h={isWideScreen? "100rem" : "50rem"} w={isWideScreen? "130%" : "100%"} p="3rem"></Div>
                                           </Div>
                                           

                    ))}
                </Col>
            </Row>
        </Container >
        </ThemeProvider>
    )
}



export default Product;