import React, { useContext } from 'react'
import { Anchor, Container} from 'atomize'
import lifer from '../components/image 12.png'
import background from "../SkyGradient_top_mid.png";
import { ShopContext } from '../context/shopContext';
import "../App.css"


const Navbar = () =>{

    const {openCart} = useContext(ShopContext)
    return (
        <>
            <Container h="4rem" align="left" d="flex" flexDir="row" p="1rem" justify="space-between" pos="fixed" top="0px" style={{zIndex: "100"}} bgImg={background} minW="100%" >
            <a href='http://localhost:3000/'><img src={lifer} alt="lifer" height="100%" ></img></a>
            {/*<a href="http://localhost:3000/shop" className='navtag'>Shop</a>*/}
            <a href="http://localhost:3000/about" className='navtag'>About</a>
            {/*<a href="http://localhost:3000" className='navtag'>Archive</a>*/}
            <a href="http://localhost:3000/gkys" className='navtag'>Home Page</a>
            {/*<a href="http://localhost:3000/test" className='navtag'>Test Page</a>*/}
            <a href="http://localhost:3000/Tshirt" className='navtag'>T Shirts</a>
            <Anchor h= "1.5rem" onClick={()=> openCart()} className='navtag' textColor="black">Cart</Anchor>
            </Container>
        </>
    )
    
}

export default Navbar