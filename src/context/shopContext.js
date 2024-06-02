import React, { Component } from "react"
import  Client  from "shopify-buy"

const ShopContext = React.createContext()

const client = Client.buildClient({
   storefrontAccessToken: '95afbc26e47e2dcc061474657de6694f',
    domain: 'lifershop.com/'
  // domain: 'chucks-development-store.myshopify.com/',
 // storefrontAccessToken: "137dfec88bb2a9aa8e7462106ce3d7ba"
})

class ShopProvider extends Component{
    state = {
        products: [],
        product: {},
        collections: {},
        currentPage: 1,
        checkout: {},
        isCartOpen: false,
        test: 'test',
        aboutPageDescription: ""

    }

    componentDidMount(){
        this.createCheckout()
    }
    createCheckout = async () => {
        const checkout = await client.checkout.create()
        console.log(checkout)
        this.setState({ checkout: checkout })
    }

    addItemToCheckout = async (variantId, quantity) =>{
        const lineItemsToAdd = [{
            variantId,
            quantity: parseInt(quantity, 10)
        }]

        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd)
        this.setState({ checkout: checkout })
    }

    fetchAllProducts = async () =>{
        const products = await client.product.fetchAll()
        this.setState( {products: products })
    }

    fetchProductWithId = async (id) =>{
        const product = await client.product.fetch(id)
        this.setState({product: product })
    }

    fetchCollection = async () =>{
        try {
            const collections = await client.collection.fetchAll();
            const product = await client.collection.fetchWithProducts(collections[0].id);
            //console.log("these re products")
           // console.log(product.products)
            console.log("this is the collection")
            console.log(collections)
           // console.log("Fetched products: ", product.products);
            if (!Array.isArray(product.products)) {
                throw new Error("Products are not an array");
              }
              this.setState({ collections: Array.isArray(product.products) ? product.products : [] });
          } catch (error) {
            // Handle the error, you can log it for debugging purposes
            console.error("Error fetching collections", error);
            this.setState({ collections: [] })
          }
    }

    fetchTShirtCollection = async () =>{
        try {
            const collections = await client.collection.fetchAll();
            const product = await client.collection.fetchWithProducts(collections[1].id);
            console.log("i am deeply saddened", product.products)
            //console.log(product.products)
            console.log(collections)
            console.log("Fetched products: ", product.products[0].availableForSale);
            if (!Array.isArray(product.products)) {
                throw new Error("Products are not an array");
              }
              this.setState({ 
                collections: Array.isArray(product.products) ? product.products : [] 
                });
          } catch (error) {
            // Handle the error, you can log it for debugging purposes
            console.error("Error fetching collections", error);
            this.setState({ collections: [] })
          }
    }

    fetchArchiveCollection = async () =>{
        try {
            const collections = await client.collection.fetchAll()
            //const perPage = 200
            const product = await client.collection.fetchWithProducts(collections[2].id,{productsFirst: 200})
            
            /*
                page: this.state.currentPage,
                perPage,
            */
            
            console.log("Fetched products: ", product.products)
             this.setState((prevState)=>({
                    collections: Array.isArray(prevState.collections) 
                    ? [...prevState.collections, ...product.products]
                    : [...product.products],
                    currentPage: prevState.currentPage +1,
                
               }))
        } catch (error) {
            // Handle the error, you can log it for debugging purposes
            console.error("Error fetching collections", error);
            this.setState({
                    collections: []
            })
        }
    }

    
    fetchAboutPage = async () =>{
        try{
            const aboutPage = await client.collection.fetchByHandle("about-page")
            console.log(aboutPage)

            const description = aboutPage.description
            console.log(description)
            this.setState({aboutPageDescription: description})

        }catch(error){
            console.log("error fetching about page")
        }
    }

 

    closeCart = () =>{ this.setState({ isCartOpen: false })}

    openCart = () =>{this.setState({ isCartOpen: true })}

    render(){
        return(
            <ShopContext.Provider 
            value={{
                ...this.state,
                fetchAllProducts: this.fetchAllProducts,
                fetchCollection: this.fetchCollection,
                fetchTShirtCollection: this.fetchTShirtCollection,
                fetchArchiveCollection: this.fetchArchiveCollection,
                fetchAboutPage: this.fetchAboutPage,
                fetchProductWithId: this.fetchProductWithId,
                closeCart: this.closeCart,
                openCart: this.openCart,
                addItemToCheckout: this.addItemToCheckout
                }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export {ShopConsumer, ShopContext}
export default ShopProvider

