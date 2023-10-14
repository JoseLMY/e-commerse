import { useState, useEffect, useContext } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../Context'

import cart from "../../assets/cart.svg"
import "./styles.css"

const Elegant = () => {
    const url = 'http://localhost:5173/elegant' //Here we are calling the api, in this case the api is local.
    const [products, setProducts] = useState()
    const fetchApi = async () => {  // We create an asynchronous function, where we wait for the data
    const response = await fetch(url) // These data is saved in response
    
    const responseJSON = await response.json()
    setProducts(responseJSON)
}

    useEffect(() => {
        fetchApi()
    }, [])

    const context = useContext(ShoppingCartContext)

    return (
        <>
            <section id='elegant'>
                    { !products ? 'Cargando' : products.map((product, key) => {
                    return  (
                        <article className="articleContainer" key={product.id} onClick={() => {context.openProductDetail()}}>   
                            <div className="imgContainer">
                                <img src={product.img_product} alt="personaje" className="img" />
                            </div>
                            <div className="details">
                                <h1 className="productTtitle">{product.title_product}</h1> 
                                <div className='buySection'>
                                    <p className='price'>${product.price}</p>
                                    <div className="plusIconContainer">
                                        <PlusIcon className="plusIcon" alt='buy dress' onClick={() => context.setCount(context.count + 1)}/>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )})}
                
            </section>
        </>
    )
}

export {Elegant}