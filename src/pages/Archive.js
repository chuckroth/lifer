import React, { useContext, useEffect, useState}  from 'react'
import { ShopContext } from '../context/shopContext'
import { Text, Container, Row, Div, Col, ThemeProvider, Button} from 'atomize'
import { Link } from 'react-router-dom'

const Archive = () =>{
    const {fetchArchiveCollection, collections} = useContext(ShopContext)
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(()=>{
        fetchArchiveCollection(currentPage)
        return () => {

        };
    }, [fetchArchiveCollection, currentPage])

    const theme= {
        fontFamily: {
          primary: "Palatino",
        }
      }

      const handleLoadMore = () =>{
        console.log("I've been clicked")
        setCurrentPage((prevPage) => prevPage + 1)
       }

      if (!Array.isArray(collections)) {
        return <p>loading</p>;
      }
    return(
        <Container>
            <Row >
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
            <Div d="flex" justify="center">
            <Button onClick={handleLoadMore} m={{ t: '2rem' }}>
                Load More
            </Button>
            </Div>
            </Row>
            <Row>
                <Div h="18rem"></Div>
            </Row>
        </Container>
       
    )
}

export default Archive