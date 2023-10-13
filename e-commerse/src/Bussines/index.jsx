import { useState, useEffect } from "react"
import cart from "../assets/cart.svg"

const Bussines = () => {
    const url = 'http://localhost:5173/bussines' //Here we are calling the api, in this case the api is local.
    const [products, setProducts] = useState()
    const fetchApi = async () => {  // We create an asynchronous function, where we wait for the data
    const response = await fetch(url) // These data is saved in response
    
    const responseJSON = await response.json()
    setProducts(responseJSON)
}

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <section id='home'>
                    { !products ? 'Cargando' : products.map((product) => {
                    return  (
                        <article className="articleContainer">   
                            <div className="imgContainer">
                                <img src={product.img_product} alt="personaje" className="img" />
                            </div>
                            <div className="details">
                                <h1 className="productTtitle">{product.title_product}</h1> 
                                <div className='buySection'>
                                    <p className='price'>${product.price}</p>
                                    <img className='cart' src={cart} alt='buy dress'/>
                                </div>
                            </div>
                        </article>
                    )})}
                
            </section>
        </>
    )
}

export {Bussines}