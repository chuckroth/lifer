//import background from "../SkyGradient_top_mid.png";
import React, { useContext, useEffect, useState}  from 'react'
import { ShopContext } from '../context/shopContext'
import { Container, Text, Div, Row, Col, ThemeProvider, Button} from 'atomize'
import { Link } from 'react-router-dom'
const Shop = () => {
    const {fetchAllProducts, products} = useContext(ShopContext)
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        fetchAllProducts(currentPage)
        return () => {

        };
    }, [fetchAllProducts, currentPage])

    const theme= {
        fontFamily: {
          primary: "Palatino",
        }
      }

   const handleLoadMore = () =>{
    setCurrentPage((prevPage) => prevPage + 1)
   }
    
    if(!products) return <p>no demons</p>
    return(
        <Container >
            <Row>
            <Div h="2rem"></Div>
            <Div d="flex" justify="center">
            <Button onClick={handleLoadMore} m={{ t: '2rem' }}>
                Load More
            </Button>
            </Div>
            </Row>
            <Row>
                {products.map(product =>(
                    <Col key={product.id} size={{xs:12, md: 6, lg: 4}}>
                        <Link to={`/${product.id}`} >
                            <Div p="2rem"  >
                                <Div
                                    h ="22rem"
                                    bgImg={product.images[0].src}
                                    bgSize="contain"
                                    bgPos="center center"
                                    bgRepeat="no-repeat"
                                />
                                <ThemeProvider theme={theme}>
                                <Text fontFamily="primary" textColor="black" hoverTextColor="red" textAlign={{xs: "center", lg: "left"}}>{product.title} </Text>
                                <Text fontFamily="primary" textColor="black" hoverTextColor="red" textAlign={{xs: "center", lg: "left"}}>${product.variants[0].price.amount}</Text>
                                </ThemeProvider>
                            </Div>
                        </Link>
                        
                    </Col>
                ))}
            </Row>
            
            <Row>
                <Div h="100rem"></Div>
            </Row>
        </Container>
    )
}

export default Shop