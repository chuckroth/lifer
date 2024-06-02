import React, { useContext } from 'react'
import { Anchor, Container} from 'atomize'
import {Link} from 'react-router-dom'
import lifer from '../components/image 12.png'
import background from "../SkyGradient_top_mid.png";
import { ShopContext } from '../context/shopContext';
import "../App.css"


const Navbar = () =>{

    const {openCart} = useContext(ShopContext)
    return (
        <>
            <Container 
                h="4rem" 
                align="left" 
                d="flex" 
                flexDir="row" 
                p="1rem" 
                justify="space-between" 
                pos="fixed" top="0px" 
                style={{zIndex: "100"}} 
                bgImg={background} 
                minW="100%" >
            <Link to="/"><img src={lifer} alt="lifer" height="100%" />
            </Link>
            <Link to="/gkys" className="navtag">
            New!
            </Link>
            <Link to="/about" className="navtag">
            About
            </Link>
            <Link to="/Tshirt" className="navtag">
            T Shirts
            </Link>
            <Link to="/Archive" className="navtag">
            Archive
            </Link>
            <Anchor h= "1.5rem" onClick={()=> openCart()} className='navtag' textColor="black">Cart</Anchor>
            </Container>
        </>
    )
    
}

export default Navbar