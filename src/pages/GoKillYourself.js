import React, { useContext, useEffect, useState}  from 'react'
import { ShopContext } from '../context/shopContext'
import { Text, Container, Row, Div, Col, ThemeProvider, Button} from 'atomize'
import { Link } from 'react-router-dom'

const GoKillYourself = () =>{
    const {fetchCollection, collections} = useContext(ShopContext)

    useEffect(()=>{
        fetchCollection()
        return () => {

        };
    }, [fetchCollection])

    const theme= {
        fontFamily: {
          primary: "Palatino",
        }
      }

 

      if (!Array.isArray(collections)) {
        return <p>loading</p>;
      }
    return(
        <Container>
            <Row>  
            {collections.map(collection=>(
                <Col size={{xs:12, md: 6, lg: 4}}>
                    <Link to={`/${collection.id}`} >
                    <Div p="2rem"  >
                    {collection.images && collection.images[0] && (
                                <Div
                                    h ="22rem"
                                    bgImg={collection.images[0].src}
                                    bgSize="contain"
                                    bgPos="center center"
                                    bgRepeat="no-repeat"
                                />
                    )}
                                <ThemeProvider theme={theme}>
                                <Text fontFamily="primary" textColor="black" hoverTextColor="red" textAlign={{xs: "center", lg: "left"}}>{collection.title} </Text>
                                {collection.variants && collection.variants[0] &&(
                                <Text fontFamily="primary" textColor="black" hoverTextColor="red" textAlign={{xs: "center", lg: "left"}}>${collection.variants[0].price.amount}</Text>
                                )}
                                </ThemeProvider>
                            </Div>
                    </Link>
                </Col>
                ))}
            
            </Row>
            <Row>
            <Div h="2rem"></Div>
            
            </Row>
            <Row>
                <Div h="18rem"></Div>
            </Row>

        </Container>
       
    )
}

export default GoKillYourself